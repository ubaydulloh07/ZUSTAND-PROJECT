






// import React from "react";
// import useStore from "../../store/useStore";
// import "./product.css";

// const Products = () => {
//   const { products, user, addToCart, addToLiked, removeProduct } = useStore();

//   return (
//     <div className="product-container">
//       <h2>Products</h2>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             {/* <h3>{product.title}</h3>
//             <p>{product.price} $</p> */}

//                 <img
//                   src={product.image || "default-image.jpg"}
//                   alt={product.name}
//                   onError={(e) => (e.target.src = "default-image.jpg")}
//                 />
//                 <h3>Nomi: {product.name}</h3>
//                 <p>Narxi: {product.price} so'm</p>

//             {user ? (
//               <>
//                 <button onClick={() => removeProduct(product.id)}>Delete</button>
//                 <button>Edit</button>
//               </>
//             ) : (
//               <div className="buttons">
//                 <button className="buy" onClick={() => addToCart(product.id)}>Buy</button>
//                 <button className="like" onClick={() => addToLiked(product.id)}>Like</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useStore from "../../store/useStore";
import "./product.css";

const fetchProducts = async (page) => {
  const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
  const data = await res.json();
  return data.products; 
};

const Products = () => {
  const { user, addToCart, addToLiked, removeProduct } = useStore();
  const [page, setPage] = useState(1);

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi!</p>;
  if (!products || products.length === 0) return <p>Mahsulotlar yo‘q...</p>;

  return (
    <div className="product-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card-11">
            <img
              src={product.thumbnail || "default-image.jpg"}
              alt={product.title}
              onError={(e) => (e.target.src = "default-image.jpg")}
            />
            <h3>Nomi: {product.title}</h3>
            <p>Narxi: {product.price} $</p>

            {user ? (
              <div className="buttons">
                <button className="delete" onClick={() => removeProduct(product.id)}>Delete</button>
                <button className="edit">Edit</button>
              </div>
            ) : (
              <div className="buttons">
                <button className="buy" onClick={() => addToCart(product.id)}>Buy</button>
                <button className="like" onClick={() => addToLiked(product.id)}>Like</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="prev" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Oldingi
        </button>
        <span> Sahifa: {page} </span>
        <button className="next" onClick={() => setPage((prev) => prev + 1)} disabled={products.length < 10}>
          Keyingi 
        </button>
      </div>
    </div>
  );
};

export default Products;
