import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);


  

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container">
      <h1>Savatcha 🛒</h1>
      <div className="product-list">
      {cart.length > 0 ? cart.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} so'm</p>
          <button onClick={() => removeFromCart(index)}>O‘chirish ❌</button>
        </div>
      )) : <p>Savatcha bo‘sh.</p>}

      </div>
    </div>
  );
}

export default Cart;
