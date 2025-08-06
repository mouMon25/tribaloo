import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";

import women_banner from "./Components/Assets/banner_women.jpg";
import men_banner from "./Components/Assets/banner_mens.jpg";
import kid_banner from "./Components/Assets/banner_kids.jpg";

const backend_url = 'https://tribaloobackend.onrender.com/';
export const currency = '₹';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route
            path="/attires"
            element={<ShopCategory banner={men_banner} category="attires" />}
          />
          <Route
            path="/delights"
            element={<ShopCategory banner={women_banner} category="delights" />}
          />
          <Route
            path="/crafts"
            element={<ShopCategory banner={kid_banner} category="crafts" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
