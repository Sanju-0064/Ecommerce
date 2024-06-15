import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
// css
import "./assets/lib/lightbox/css/lightbox.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
// js
import "./assets/lib/easing/easing.min.js";
import "./assets/lib/waypoints/waypoints.min.js";
// import './assets/lib/lightbox/js/lightbox.min.js'
import "./assets/lib/owlcarousel/owl.carousel.min.js";
import "./assets/js/main.js";

import Navbar from "./components/Utils/Navbar";
import HomeBanner from "./components/Banners/HomeBanner.jsx";
import Features from "./components/Features/Features.jsx";
import Home from "./components/Home/Home.jsx";
import NotFound from "./components/Utils/NotFound.jsx";
import Footer from "./components/Utils/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Details from "./components/ShopDetail/Details.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-detail" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
