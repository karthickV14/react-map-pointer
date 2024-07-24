import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFount from "./pages/PageNotFount";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
