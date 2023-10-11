import React from "react";
import { Link } from "react-router-dom";

import hero from "../images/Hero.jpg";
import hero2 from "../images/hero2.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <img src={hero} alt="" />

      <div className="hero-details">
        <h1>Every day is unique, just like our tea</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
          adipiscing odio. Neque lacus nibh eros in.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
          adipiscing odio. Neque lacus nibh eros in.
        </p>

        <Link to="/collections" className="btn">
          BROWSE TEAS
        </Link>
      </div>
    </section>
  );
};

export default Hero;
