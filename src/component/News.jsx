import React from "react";
import { Link } from "react-router-dom";

import news from "../images/news.png";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";

const News = () => {
  return (
    <section className="news-container">
      <div>
        <h2>FOR WHOLESALERS</h2>

        <p>
          We offer loose tea leaves of the best quality for your business. With
          a choice of more than 450 different kinds of loose tea, we can make a
          sophisticated selection that fits exactly in your kind of
          establishment.
        </p>

        <Link to="/contact" className="btn2">
          GET A FREE CONSULTATION
        </Link>
      </div>

      <img src={news3} alt="" />
    </section>
  );
};

export default News;
