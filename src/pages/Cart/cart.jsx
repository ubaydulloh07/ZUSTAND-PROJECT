import useStore from "../../store/useStore";
import "./cart.css";
import { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart } = useStore();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * quantities[product.id],
    0
  );

  return (
    <div className="cart-222">
      <h2>Savat</h2>

      <div className="dflex">

      <div className="cart-container">
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.name}
                  onError={(e) => (e.target.src = "default-image.jpg")}
                />

                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>
                    Narxi: <strong>{product.price.toLocaleString()} so‘m</strong>
                  </p>

                 

                  {/* Oylik to‘lov */}
                  <p>
                    <small>
                      {Math.round((product.price * quantities[product.id]) / 12).toLocaleString()} so‘m x 12 oy
                    </small>
                  </p>

                </div>
                  <button className="remove" onClick={() => removeFromCart(product.id)}>🗑 O‘chirish</button>

                <div className="quantity-controls">
                    <button className="minus" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{quantities[product.id]}</span>
                    <button className="plus" onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>


              </div>
            ))}
          </div>
        ) : (
          <p>Savat bo‘sh...</p>
        )}
      </div>
      {/* Savatning umumiy hisob qismini qo‘shish */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Savatda {cart.length} ta mahsulot</h3>
          <p>Umumiy summa: <strong>{totalAmount.toLocaleString()} so‘m</strong></p>
          <button className="checkout">OFORMIT</button>
        </div>
      )}
      </div>


    </div>
  );
};

export default Cart;
