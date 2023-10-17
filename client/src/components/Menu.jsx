import React, { useState, useEffect } from "react";
import Category from "./Category";
import "../styles/Menu.css";
import { useQuery, gql } from "@apollo/client";

// Define GraphQL query to fetch menu items
const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    menuItems {
      _id
      name
      category
      image
      description
      includes
      price
    }
  }
`;

//TODO: add functionality so only users that schedule an event can order from the menu. (they can see the menu but not order from it)

const Menu = ({ itemCounter, setItemCounter, cartItems, setCartItems }) => {
  const [menuItems, setMenuItems] = useState([]); // State to hold menu items
  // Fetch data using Apollo Client
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  // Use effect to set menu items when data is fetched
  useEffect(() => {
    // console.log(data);
    if (data) {
      setMenuItems(data.menuItems);
      // console.log(menuItems);
    }
  }, [data]);
  // console.log(menuItems);

  // Loading and error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Group menu items by category using reduce
  const groupedByCategory = menuItems.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="menu">
      {/* Loop through the grouped categories and render each one */}
      {Object.keys(groupedByCategory).map((category, index) => (
        <Category
          key={index}
          category={category}
          items={groupedByCategory[category]}
          itemCounter={itemCounter}
          setItemCounter={setItemCounter}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default Menu;
