import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data";

import { FaSearch } from "react-icons/fa";

const Product = () => {
  return (
    <section className="product-container">
      <h2>Our Collections</h2>

      <div className="product-grid">
        {data.map((product) => {
          return (
            <div key={product.id}>
              {/* Wrap the product's image and name with a Link */}

              <Link to={`/details/${product.id}`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />

                  <div className="overlay">
                    <p> QUICK VIEW</p>
                  </div>
                </div>

                <h3 className="soo">{product.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <Link to="/collections" className="btn">
        ALL PRODUCTS
      </Link>
    </section>
  );
};

export default Product;

// import React from "react";
// import { Link } from "react-router-dom";
// import data from "../assets/data";

// import { FaSearch } from "react-icons/fa";

// const Product = () => {
//   return (
//     <section className="product-container">
//       <h2>Our Collections</h2>

//       <div className="product-grid">
//         {data.map((product) => {
//           return (
//             <div key={product.id}>
//               <Link to="/collections">
//                 <div className="product-image">
//                   <img src={product.image} alt={product.name} />

//                   <div className="overlay">
//                     <Link to={`/details`} className="search-icon">
//                       <p> QUICK VIEW</p>
//                     </Link>
//                   </div>
//                 </div>
//               </Link>
//               <h3>{product.name}</h3>
//             </div>
//           );
//         })}
//       </div>

//       <Link to="/collections" className="btn">
//         ALL PRODUCTS
//       </Link>
//     </section>
//   );
// };

// export default Product;
