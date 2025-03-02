import { useState, useEffect } from "react";

function LikedProducts() {
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("liked")) || []);
  }, []);


  

  const removeFromLiked = (index) => {
    const updatedLiked = liked.filter((_, i) => i !== index);
    setLiked(updatedLiked);
    localStorage.setItem("liked", JSON.stringify(updatedLiked));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container">
      <h1>Yoqqan mahsulotlar ❤️</h1>
      {liked.length > 0 ? liked.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} so'm</p>
          <button onClick={() => removeFromLiked(index)}>O‘chirish ❌</button>
        </div>
      )) : <p>Yoqqan mahsulotlar yo‘q.</p>}
    </div>
  );
}

export default LikedProducts;
