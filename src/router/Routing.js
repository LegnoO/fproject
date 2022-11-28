import { Routes, Route } from "react-router-dom";

import FormLogin from "./../pages/FormLogin";
import Register from "./../pages/Register";
import Product from "./../pages/Product";
import Detail from "../pages/DetailProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import HomePage from "../pages/HomePage";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:slug/:id" element={<Detail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/" element={<FormLogin />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;
