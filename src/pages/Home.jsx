import React from "react";
import Hero from "../component/Hero";
import Services from "../component/Services";
import Product from "../component/Product";
import Blog from "../component/Blog";
import News from "../component/News";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Product />
      <Blog />
      <News />
    </>
  );
};

export default Home;
