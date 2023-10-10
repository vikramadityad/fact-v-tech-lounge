import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const MenuItem = ({ item, itemCounter, setItemCounter }) => {
  const addToCart = () => {
    // If needed logic to handle adding the item to the cart (after we will check Strip integration)
    console.log(`Added ${item.name} to cart.`);
    setItemCounter(++itemCounter);
  };

  return (
    <div className="menu-item">
      <img src={item.imgUrl} alt={item.name} className="item-img" />
      <span>{item.name}</span>
      <PrimaryButton
        label="Add to Cart"
        action={addToCart}
        type="btn-primary"
      />
    </div>
  );
};

export default MenuItem;
