

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";

import Home from "./pages/Home/home";
import Liked from "./pages/Liked/liked";
import Cart from "./pages/Cart/cart";
import Add from "./pages/add-page/add";

function App() {
  return (

    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/liked" element={ <Liked/>} />
        <Route path="/cart" element={ <Cart/>} />
        <Route path="/add" element={ <Add/>} />
      </Routes>
     
    </BrowserRouter>
    
   
    
  );
}

export default App;


