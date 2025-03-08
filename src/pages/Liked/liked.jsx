import useStore from "../../store/useStore";
import "./liked.css";


const Liked = () => {
  const { likedProducts, addToLiked } = useStore();

  return (
    <div className="liked-container">
      <h2>Yoqtirgan mahsulotlar</h2>
      {likedProducts.length > 0 ? (
        <div className="liked-items">
          {likedProducts.map((product) => (
            <div key={product.id} className="liked-item">
              <img
                src={product.image || "default-image.jpg"}
                alt={product.name}
                onError={(e) => (e.target.src = "default-image.jpg")}
              />
              <h3>{product.name}</h3>
              <p>Narxi: {product.price} so‘m</p>
              <button className="like" onClick={() => addToLiked(product.id)}> Unlike</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Yoqtirgan mahsulotlar yo‘q...</p>
      )}
    </div>
  );
};

export default Liked;
