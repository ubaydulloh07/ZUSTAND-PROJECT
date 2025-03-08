



import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import Liked from "./pages/Liked/liked";
import Cart from "./pages/Cart/cart";
import Add from "./pages/add-page/add";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import useAuth from "./store/useAuth";
import Products from "./pages/product-page/product";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
       {user && <Route path="/products" element={<Products />} />}
        {user && <Route path="/add" element={<Add />} />}
        {user && <Route path="/profile" element={<Profile />} />}
        {!user && <Route path="/login" element={<Login />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
