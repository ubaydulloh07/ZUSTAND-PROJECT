



// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/header/header";
// import Home from "./pages/Home/home";
// import Liked from "./pages/Liked/liked";
// import Cart from "./pages/Cart/cart";
// import Add from "./pages/add-page/add";
// import Profile from "./pages/profile/profile";
// import Login from "./pages/login/login";
// import useAuth from "./store/useAuth";
// import Products from "./pages/product-page/product";

// function App() {
//   const { user } = useAuth();

//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/liked" element={<Liked />} />
//         <Route path="/cart" element={<Cart />} />
//        {user && <Route path="/products" element={<Products />} />}
//         {user && <Route path="/add" element={<Add />} />}
//         {user && <Route path="/profile" element={<Profile />} />}
//         {!user && <Route path="/login" element={<Login />} />}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import Liked from "./pages/Liked/liked";
import Cart from "./pages/Cart/cart";
import Add from "./pages/add-page/add";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Products from "./pages/product-page/product";
import useAuth from "./store/useAuth";

// PrivateRoute: agar foydalanuvchi login qilgan bo'lsa, bolalarni ko'rsatadi, aks holda /login ga yo'naltiradi.
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Barchasi umumiy yo'nalishlar */}
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />

        {/* Faqat login qilgan foydalanuvchilar uchun bo'lgan sahifalar */}
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <Add />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Agar yo'nalish topilmasa, Home ga yo'naltirilsin */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
