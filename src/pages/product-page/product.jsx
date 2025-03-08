






import React from "react";
import useStore from "../../store/useStore";
import "./product.css";

const Products = () => {
  const { products, user, addToCart, addToLiked, removeProduct } = useStore();

  return (
    <div className="product-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* <h3>{product.title}</h3>
            <p>{product.price} $</p> */}

                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.name}
                  onError={(e) => (e.target.src = "default-image.jpg")}
                />
                <h3>Nomi: {product.name}</h3>
                <p>Narxi: {product.price} so'm</p>

            {user ? (
              <>
                <button onClick={() => removeProduct(product.id)}>Delete</button>
                <button>Edit</button>
              </>
            ) : (
              <div className="buttons">
                <button className="buy" onClick={() => addToCart(product.id)}>Buy</button>
                <button className="like" onClick={() => addToLiked(product.id)}>Like</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
