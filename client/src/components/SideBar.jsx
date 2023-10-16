import "../styles/SideBar.css";
import formatCurrency from "../utilities/formatCurrency";
import { useState } from "react";

const SideBar = ({
  cartItems,
  setCartItems,
  setItemCounter,
  itemCounter,
  removeCartItem,
}) => {
  //get total price of items in cart

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Function to remove an item from the cart
  const removeItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setItemCounter(itemCounter - 1); // Decrement itemCounter
    setCartItems(updatedCart); // Update cartItems state
  };

  console.log(cartItems);
  //Fetch statement to post cart items to stripe database
  const checkout = async () => {
    console.log(cartItems);
    await fetch("http://localhost:5173/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },

      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); //forwards user over to stripe payment
        }
      });
  };

  return (
    <div className="sidebar">
      {cartItems.map((i) => (
        <div className="sidebar_items">
          <div className="sidebar_category">
            <img src={i.imgUrl} alt="i.name" />
            <div className="sidebar_description">
              <h5 className="sidebar_title">{i.name}</h5>
              <h6 className="sidebar_cat text-muted">Category: {i.category}</h6>
            </div>
          </div>
          <div className="sidebar-btn">
            <button onClick={() => removeItem(i)}>X</button>
            {formatCurrency(i.price)}
          </div>
        </div>
      ))}

      <div className="sidebar_total">
        <h2>Total: </h2>
        <h2>{formatCurrency(total)}</h2>
      </div>
      <button className="sidebar_purchase" onClick={checkout}>
        Purchase
      </button>
    </div>
  );
};

export default SideBar;
