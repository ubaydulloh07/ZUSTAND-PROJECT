import useStore from "../../store/useStore";

import "./home.css";

const Home = () => {
  const { products, addToLiked, addToCart, likedProducts, cart } = useStore();

  return (
    <div className="home-container">
      {products.length > 0 ? (
        <div className="products">
          {products.map((product) => {
            const isLiked = likedProducts.some((p) => p.id === product.id);
            const isInCart = cart.some((p) => p.id === product.id);

            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.name}
                  onError={(e) => (e.target.src = "default-image.jpg")}
                />
                <h3>Nomi: {product.name}</h3>
                <p>Narxi: {product.price} so'm</p>
                <div className="buttons">
               
                  <button className="like" onClick={() => addToLiked(product.id)}>
                    {isLiked ? " Unlike" : " Like"}
                  </button>

                  <button  className="cart" onClick={() => addToCart(product.id)} disabled={isInCart}>
                  
                    🛒
                  </button>
                 
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Mahsulotlar yo‘q...</p>
      )}
    </div>
  );
};

export default Home;
