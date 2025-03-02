import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [likedCount, setLikedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      setCartCount((JSON.parse(localStorage.getItem("cart")) || []).length);
      setLikedCount((JSON.parse(localStorage.getItem("liked")) || []).length);
    };

    updateCounts();
    window.addEventListener("storage", updateCounts);
    return () => window.removeEventListener("storage", updateCounts);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">Bosh sahifa</Link>
      <Link to="/cart">Savatcha 🛒 ({cartCount})</Link>
      <Link to="/liked">Yoqqanlar ❤️ ({likedCount})</Link>
      <Link to="/add-product">+ Mahsulot qo‘shish</Link>
    </nav>
  );
}

export default Header;
