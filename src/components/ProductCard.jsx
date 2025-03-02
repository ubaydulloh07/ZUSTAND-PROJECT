function ProductCard({ product }) {
  const handleLike = () => {
    const likedProducts = JSON.parse(localStorage.getItem("liked")) || [];
    localStorage.setItem("liked", JSON.stringify([...likedProducts, product]));
    alert("Mahsulot yoqqanlarga qo‘shildi! ❤️");
  };

  const handleAddToCart = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...cartProducts, product]));
    alert("Mahsulot savatchaga qo‘shildi! 🛒");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} so'm</p>

      <div className="buttons">
      <button className="add-to-cart" onClick={handleAddToCart}> 🛒</button>
      <button className="like" onClick={handleLike}>❤️</button>

      </div>
    </div>
  );
}

export default ProductCard;
