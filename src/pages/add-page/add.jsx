import { useState } from "react";
import useStore from "../../store/useStore";
import "./add.css";

const Add = () => {
  const { products, addProduct, updateProduct, removeProduct } = useStore();

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.price.trim() || !formData.image.trim()) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    if (formData.id) {
      updateProduct(formData.id, {
        name: formData.name,
        price: Number(formData.price),
        image: formData.image,
      });
    } else {
      addProduct({
        name: formData.name,
        price: Number(formData.price),
        image: formData.image,
      });
    }

    setFormData({ id: null, name: "", price: "", image: "" });
  };

  return (
    <div className="add-page">
      <div className="add-form">
        <h2>Mahsulot qo‘shish</h2>
        <input
          type="text"
          name="name"
          placeholder="Mahsulot nomi"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Narxi"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Rasm URL"
          value={formData.image}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          {formData.id ? "O‘zgartirish" : "Qo‘shish"}
        </button>
      </div>

      <hr />

      <h2 className="vvd">Mahsulotlar ro‘yxati</h2>

      <div className="product-list-2">
        {products.length === 0 ? (
          <p>Hali mahsulot yo‘q...</p>
        ) : (
          <div className="product-2">
            {products.map((product) => (
              <div key={product.id} className="product-card-2">
                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.name}
                  onError={(e) => (e.target.src = "default-image.jpg")}
                />
                <h3>Nomi: {product.name}</h3>
                <p>Narxi: {product.price} so‘m</p>
                <div className="buttons-2">
                  <button className="edit" onClick={() => setFormData(product)}>✏️</button>
                  <button className="delete" onClick={() => removeProduct(product.id)}>🗑</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
