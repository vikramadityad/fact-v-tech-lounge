import "../styles/SideBar.css";
import formatCurrency from "../utilities/formatCurrency";
import { useState } from "react";

const SideBar = ({
  //deconstructure props

  cartItems,
  setCartItems,
  setItemCounter,
  itemCounter,
  removeCartItem,
  setPurchaseComplete,
  purchchaseComplete,
  setThankYou,
}) => {
  //get total price of items in cart

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Function to remove an item from the cart
  const removeItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setItemCounter(itemCounter - 1); // Decrement itemCounter
    setCartItems(updatedCart); // Update cartItems state
  };

  // if anything in cart thank user for purchase and set timeer to reset cart and verify order has been processed
  const fakeCheckout = () => {
    if (cartItems.length >= 0) {
      setPurchaseComplete(true);
      setTimeout(() => {
        setPurchaseComplete(false);
        setItemCounter(0);
        setCartItems([]);
        setThankYou("Your order has been Processed");
      }, 3000);
    }
  };

  // Return items in cart
  return (
    <div className="sidebar">
      {cartItems.map((i) => (
        <div className="sidebar_items" key={i.id}>
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

      {/* //total price and puchase button */}
      <div className="sidebar_total">
        <h2>Total: </h2>
        <h2>{formatCurrency(total)}</h2>
      </div>
      <button className="sidebar_purchase" onClick={fakeCheckout}>
        Purchase
      </button>
    </div>
  );
};

export default SideBar;
