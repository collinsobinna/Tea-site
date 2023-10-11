import React from "react";
import logo from "../images/psychiatry.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <h3>Tea Garden</h3>

        <div>
          <p>&copy; {currentYear} Collins Tea. All rights reserved.</p>
        </div>
      </div>

      <div>
        <h2>COLLECTIONS</h2>

        <ul>
          <li>Black teas</li>
          <li>Green teas</li>
          <li>White teas</li>
          <li>Herbal teas</li>
          <li>Matcha </li>
          <li>Chai </li>
          <li>Oolong </li>
          <li>Rooibos </li>
          <li>Teaware </li>
        </ul>
      </div>

      <div>
        <h2>LEARN</h2>

        <ul>
          <li>About Us</li>
          <li>About Our teas</li>
          <li>Tea academy</li>
        </ul>
      </div>

      <div>
        <h2>CUSTOMER SERVICE</h2>

        <ul>
          <li>Ordering and payment</li>
          <li>Delivery</li>
          <li>Privacy and policy</li>
          <li> Terms and conditions</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
