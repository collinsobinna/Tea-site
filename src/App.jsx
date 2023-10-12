import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Blog from "./component/Blog";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <BrowserRouter>
        <NavBar cartItems={cartItems} />

        <div className="content-wrapper">
          <Routes>
            <Route path="Tea-site" element={<Home />} />
            <Route path="collections" element={<Collections />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="details/:itemId" element={<Details />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
