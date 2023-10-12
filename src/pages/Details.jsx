import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import data from "../assets/data";

import { BsGlobe, BsBagCheckFill, BsBag } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
import DetailsHero from "../component/DetailsHero";

const Details = () => {
  const { itemId } = useParams();
  const selectedItem = data.find((item) => item.id.toString() === itemId);

  if (!selectedItem) {
    // Handle the case where the item is not found
    return <div>Item not found</div>;
  }

  // Initialize a state variable to keep track of the selected gallery image
  const [selectedImage, setSelectedImage] = useState(selectedItem.gallery[0]);

  // Function to handle image click and update the selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const productIndexInCart = existingItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (productIndexInCart !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedItems = [...existingItems];
      updatedItems[productIndexInCart].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    } else {
      // If the product is not in the cart, add it as a new entry with quantity 1
      const newItem = { ...selectedItem, quantity: 1 };
      const updatedItems = [...existingItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    }
  };

  return (
    <>
      <section className="details-container">
        <h3>
          <Link to="Tea-site">
            HOME / <Link to="/collections">COLLECTIONS</Link>
            <span> / {selectedItem.type.toUpperCase()}</span>
          </Link>
        </h3>

        <div className="details">
          <div className="details-image">
            <img src={selectedImage} alt={selectedItem.name} />
          </div>

          <div className="details-info">
            <h2>{selectedItem.type}</h2>

            <p>
              A lovely warming {selectedItem.name} tea with ginger cinnamon
              flavors.
            </p>

            <div className="details-icons">
              <BsGlobe />
              <p>Origin: Iran</p>

              <BsBagCheckFill />
              <p>Organic</p>

              <BiLeaf />
              <p>Vegan</p>
            </div>

            <h2>${selectedItem.price.toFixed(2)} per 50g</h2>

            <p>Variants</p>

            <div className="gallery">
              {selectedItem.gallery.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    onClick={() => handleImageClick(item)} // Handle image click
                    className={selectedImage === item ? "selected" : ""}
                  />
                );
              })}
            </div>

            <div className="details-btn">
              <div className="details-btns">
                <button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
                  -
                </button>

                <h5>{quantity}</h5>

                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button className="btn2 details-cart" onClick={addToCart}>
                <Link to="/cart">
                  <BsBag className="cart" /> ADD TO BAG
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <DetailsHero />
    </>
  );
};

export default Details;

// // Details.js
// import React from "react";
// import { useParams, Link } from "react-router-dom";

// import data from "../assets/data";

// import { BsGlobe, BsBagCheckFill } from "react-icons/bs";
// import { BiLeaf } from "react-icons/bi";

// const Details = () => {
//   const { itemId } = useParams();
//   const selectedItem = data.find((item) => item.id.toString() === itemId);

//   if (!selectedItem) {
//     // Handle the case where the item is not found
//     return <div>Item not found</div>;
//   }

//   return (
//     <section className="details-container">
//       <h3>
//         <Link to="Tea-site">
//           HOME / <Link to="/collections">COLLECTIONS</Link>
//           <span> / {selectedItem.type.toUpperCase()}</span>
//         </Link>
//       </h3>

//       <div className="details">
//         <div className="details-image">
//           <img src={selectedItem.image} alt={selectedItem.name} />
//         </div>

//         <div className="details-info">
//           <h2>{selectedItem.type}</h2>

//           <p>
//             A lovely warming {selectedItem.name} tea with ginger cinnamon
//             flavors.
//           </p>

//           <div className="details-icons">
//             <BsGlobe />
//             <p>Origin: Iran </p>

//             <BsBagCheckFill />
//             <p>Organic</p>

//             <BiLeaf />
//             <p>Vegan</p>
//           </div>

//           <h2>${selectedItem.price.toFixed(2)} per 50g</h2>

//           <p>Variants</p>

//           <div className="gallery">
//             {selectedItem.gallery.map((item) => {
//               return (
//                 <>
//                   <img src={item} alt="" />
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Details;
