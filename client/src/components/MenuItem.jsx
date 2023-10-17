import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import "../styles/Menu.css";

const MenuItem = ({
  item,
  itemCounter,
  setItemCounter,
  cartItems,
  setCartItems,
}) => {
  const addToCart = () => {
    // If needed logic to handle adding the item to the cart (after we will check Strip integration)
    console.log(
      `Added ${item.name} to cart. with id#${item._id} for $${item.price} `
    );

    const newItem = {
      id: item._id,
      name: item.name,
      price: item.price,
      imgUrl: item.image,
      category: item.category,
    };
    setItemCounter(++itemCounter);
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-img" />
      <div className="menu-right-content">
        <span className="menu-name">{item.name}</span>
        <span className="menu-description">{item.description}</span>

        <PrimaryButton
          label="Add to Cart"
          action={addToCart}
          type="btn-primary"
        />
      </div>
    </div>
  );
};

export default MenuItem;
