import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Cart = ({ cartItems, setCartItems }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart items from local storage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Calculate the total price when cart items change
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    // Remove an item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const increaseQuantity = (itemId) => {
    // Increase the quantity of an item in the cart
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (itemId) => {
    // Decrease the quantity of an item in the cart
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <section className="cart-container">
      {cartItems.length === 0 ? (
        <div>
          <h1>Your cart is empty...</h1>

          <button>
            <Link to="/collections">Fill It</Link>
          </button>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <h5>1. MY BAG</h5>
            <h5>
              <span>2. DELIVERY</span>
            </h5>
            <h5>
              <span>3. REVIEW & PAYMENT</span>
            </h5>
          </div>

          <div className="cart-grid">
            <div>
              {cartItems.map((item) => {
                return (
                  <>
                    <div className="cart-items">
                      <div className="cart-img">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="cart-name">
                        <h3>{item.name}</h3>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="delete"
                        >
                          REMOVE
                        </button>
                      </div>

                      <div className="cart-btns">
                        <div className="cart-btn">
                          <button onClick={() => decreaseQuantity(item.id)}>
                            -
                          </button>
                          <p> {item.quantity}</p>
                          <button onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>

                        <h3>${item.price}</h3>
                      </div>
                    </div>
                    <hr />

                    <div className="cart-subtotal">
                      <h5>Subtotal</h5>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </>
                );
              })}

              <div className="back">
                <Link to="/collections">BACK TO SHOPPING</Link>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="cartSummary-info">
                <div>
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>

                <div>
                  <p>Delivery</p>
                  <p>$3.95</p>
                </div>
              </div>

              <hr />

              <div className="cart-total">
                <h5>Total</h5>
                <h5>${(totalPrice + 3.95).toFixed(2)}</h5>
              </div>

              <p className="estimate">Estimated shipping time: 2 Days</p>

              <button className="btn">CHECK OUT</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
