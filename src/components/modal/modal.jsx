import { useState } from "react";
import useStore from "../../store/useStore";
import "./modal.css";

const Modal = ({ closeModal }) => {
  const { addProduct } = useStore();
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      addProduct(newProduct);
      setNewProduct({ name: "", price: "", image: "" });
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Yangi Mahsulot Qo‘shish</h2>
        <input
          type="text"
          placeholder="Nomi"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Narxi"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rasm URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <div className="modal-buttons">
          <button className="btn" onClick={handleAddProduct}>Qo‘shish</button>
          <button className="btn-2" onClick={closeModal}>Bekor qilish</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
