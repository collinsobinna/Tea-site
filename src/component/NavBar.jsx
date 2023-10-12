import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../images/psychiatry.png";

const NavBar = ({ cartItems }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <section className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <h2>Tea Garden</h2>
      </div>

      <div>
        <ul
          className={click ? "navbar-links active" : "navbar-links"}
          onClick={handleClick}
        >
          <li>
            <Link to="Tea-site">Home</Link>
          </li>

          <li>
            <Link to="/collections">Tea Collections</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
            {/* <a href="#blog">Blog</a> */}
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>

      <div
        className={click ? "navbar-icons active" : "navbar-icons"}
        onClick={handleClick}
      >
        <Link to="Tea-site">
          <AiOutlineSearch />
        </Link>

        <Link to="Tea-site">
          <CiUser />
        </Link>

        <Link to="/cart">
          <BsBag />
          {cartItems.length === 0 ? "" : cartItems.length}
        </Link>
      </div>

      <div className="hamburger" onClick={handleClick}>
        <GiHamburgerMenu />
      </div>
    </section>
  );
};

export default NavBar;
