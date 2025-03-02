import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? products.map((product, index) => (
        <ProductCard key={index} product={product} />
      )) : <p>Mahsulotlar mavjud emas.</p>}
    </div>
  );
}

export default ProductList;
