import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Category = ({ category, items }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="menu-section">
      <h2 onClick={toggleIsActive}>
        {category} {isActive ? "-" : "+"}
      </h2>
      <div className={`menu-items ${isActive ? "active" : ""}`}>
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
