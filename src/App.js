import React, { Component } from "react";
import ReactDOm from "react-dom/client";
import "./index.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout1 from "./components/Layout1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
