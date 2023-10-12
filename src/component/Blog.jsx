import React from "react";
import { Link } from "react-router-dom";

import blog from "../images/blog.png";
import blog2 from "../images/blog2.png";

const Blog = () => {
  return (
    <section id="blog" className="blog-container">
      <h2>Last Blog Posts</h2>

      <div className="blog-grid">
        <div className="blog-info">
          <img src={blog} alt="" />

          <div>
            <h3>HOW TO STEEP TEA LIKE A PRO</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>

            <Link to="Tea-site">READ MORE</Link>
          </div>
        </div>

        <div className="blog-info">
          <img src={blog2} alt="" />

          <div>
            <h3>ALL ABOUT TEA AROMAS</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>

            <Link to="Tea-site">READ MORE</Link>
          </div>
        </div>

        <div className="blog-info"></div>
      </div>
    </section>
  );
};

export default Blog;
