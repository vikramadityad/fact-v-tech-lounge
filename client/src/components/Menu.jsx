import React from "react";
import "../styles/Menu.css";

const Menu = () => {
  const drinks = ["Coffee", "Tea", "Soda"];
  const food = ["Burger", "Pizza", "Salad"];
  const specials = ["Combo 1", "Combo 2", "Combo 3"];

  return (
    <div className="menu-section">
      <div className="menu-category">
        <h2>Drinks</h2>
        {drinks.map((item, index) => (
          <div key={index} className="menu-item">
            <span>{item}</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="menu-category">
        <h2>Food</h2>
        {food.map((item, index) => (
          <div key={index} className="menu-item">
            <span>{item}</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="menu-category">
        <h2>Specials</h2>
        {specials.map((item, index) => (
          <div key={index} className="menu-item">
            <span>{item}</span>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
