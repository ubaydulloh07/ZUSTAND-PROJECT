import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    setProduct(products[id]);
  }, [id]);

  const handleSave = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products[id] = product;
    localStorage.setItem("products", JSON.stringify(products));
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Mahsulotni tahrirlash</h1>
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        placeholder="Nomi"
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        placeholder="Narxi"
      />
      <input
        type="text"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        placeholder="Rasm URL"
      />
      <button onClick={handleSave}>Saqlash ✅</button>
    </div>
  );
}

export default EditProduct;
