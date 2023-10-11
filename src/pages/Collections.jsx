import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../assets/data";

import collection from "../images/collection.png";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter the data based on the selected category or show all items if no category is selected
  const filteredData = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  return (
    <section className="collection-container">
      <img src={collection} alt="" />

      <div className="collection">
        <h2>
          <Link to="/">
            Home /
            <span>
              Collections {selectedCategory ? ` /${selectedCategory}` : ""}
            </span>
          </Link>
        </h2>
      </div>

      <div className="collection-sidebar">
        <div className="sidebar">
          <h4>COLLECTIONS</h4>

          <button onClick={() => handleCategoryClick(null)}>All</button>

          {data.map((item) => (
            <div key={item.category}>
              <button onClick={() => handleCategoryClick(item.category)}>
                {item.category}
              </button>
            </div>
          ))}
        </div>

        <div className="product">
          {filteredData.map((item) => (
            <div key={item.id}>
              <div className="mee">
                <Link to={`/details/${item.id}`}>
                  <img src={item.image} alt={item.name} />

                  <div className="overlay">
                    <Link to={`/details/${item.id}`} className="search-icon">
                      <p>50g per bag</p>
                    </Link>
                  </div>
                </Link>
              </div>

              <h5>{item.name}</h5>
              <h5>{item.type}</h5>
              <p>
                ${item.price.toFixed(2)} <span>/50g</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import collection from "../images/collection.png";
// import hero from "../images/Hero.jpg";

// import data from "../assets/data";

// const Collections = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredGallery = selectedCategory
//     ? data.find((item) => item.category === selectedCategory)?.gallery || []
//     : data.flatMap((item) => item.gallery);

//   return (
//     <section className="collection-container">
//       <img src={collection} alt="" />

//       <div className="collection">
//         <h2>
//           <Link to="/">
//             Home /
//             <span>
//               Collections {selectedCategory ? ` /${selectedCategory}` : ""}
//             </span>
//           </Link>
//         </h2>

//         <div className="collection-sidebar">
//           <div className="sidebar">
//             <h4>COLLECTIONS</h4>

//             <button onClick={() => handleCategoryClick(null)}>All</button>

//             {data.map((item) => {
//               return (
//                 <div>
//                   <button onClick={() => handleCategoryClick(item.category)}>
//                     {item.category}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="product">
//             {filteredGallery.map((item) => {
//               return (
//                 <>
//                   <div className="mee">
//                     <img src={item} alt="" />

//                     <div className="overlay">
//                       <Link to={`/details/${item.id}`} className="search-icon">
//                         <p> 50g per bag</p>
//                       </Link>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Collections;
