




// import { NavLink } from "react-router-dom";
// import useAuth from "../../store/useAuth";
// import "./header.css";

// function Header() {
//   const user = useAuth((state) => state.user);
//   const logout = useAuth((state) => state.logout);

//   return (
//     <header>
//       <div className="logo">
//         <h1>Shop</h1>
//       </div>

//       <nav>
//         <NavLink to="/" end>Home</NavLink>
//         <NavLink to="/liked" end>Liked</NavLink>
//         <NavLink to="/cart" end>Cart</NavLink>
//         {/* <NavLink to="/products" end>Products</NavLink> */}

//         {user ? (
//           <>
//           <NavLink to="/products" end>Products</NavLink>
//             <NavLink to="/profile">Profile</NavLink>
//             <NavLink to="/add">Add Product</NavLink>
//             <button className="logout" onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <NavLink to="/login">Login</NavLink>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Header;


import { NavLink } from "react-router-dom";
import useAuth from "../../store/useAuth";
import "./header.css";

function Header() {
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  return (
    <header>
      <div className="logo">
        <h1>Shop</h1>
      </div>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/liked" end>Liked</NavLink>
        <NavLink to="/cart" end>Cart</NavLink>
        {user ? (
          <>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/profile" end>Profile</NavLink>
            <NavLink to="/add" end>Add Product</NavLink>
            <button className="logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login" end>Login</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
