import { Routes, Route, Navigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CreateProduct from "../pages/CreateProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Cart/components/Checkout";
import FinishCart from "../pages/FinishCart";
import SectionProduct from "../pages/SectionProduct";
import UpdateProduct from "../pages/UpdateProduct";

const Routers = () => (
  <AnimatePresence>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:id" element={<Product />} />
      <Route path="/updateProduct/:id" element={<UpdateProduct />} />
      <Route path="/home/sectionProduct" element={<SectionProduct />} />
      <Route path="/createProduct" element={<CreateProduct />} />
      <Route path="/cart" element={<Cart />}>
        <Route path="/cart/:checkout" element={<Checkout />} />
      </Route>
      <Route path="/cart/finishCart" element={<FinishCart />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </AnimatePresence>
);

export default Routers;
