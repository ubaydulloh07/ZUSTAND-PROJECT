import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    const newProduct = { name, price, image };
    const products = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));

    setName("");
    setPrice("");
    setImage("");
    alert("Mahsulot muvaffaqiyatli qo'shildi!");
  };

  return (
    <div className="container">
      <h1>Mahsulot qo‘shish</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Nomi" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Narxi" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Rasm URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Qo‘shish</button>
      </form>
    </div>
  );
}

export default AddProduct;
