import {  NavLink } from "react-router-dom";
import "./header.css";


function Header() {
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
        <h1>Shop</h1>
      </div>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/liked" end>Liked</NavLink>
        <NavLink to="/cart" end>Cart</NavLink>
      </nav>

      <div className="add">
        <NavLink  to="/add" end>Add Product</NavLink>
      </div>
    </header>
  );
}

export default Header;
