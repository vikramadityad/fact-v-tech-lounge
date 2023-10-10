import React, { useState, useEffect } from "react";
import Category from "./Category";
import "../styles/Menu.css";

const Menu = ({ itemCounter, setItemCounter }) => {
  const [menuItems, setMenuItems] = useState([]); // State to hold menu items

  // Use effect to fetch menu items when the component mounts
  useEffect(() => {
    const fetchedData = [
      {
        _id: "1",
        name: "Java Juice",
        category: "Drinks",
        imgUrl: "src/images/java.jpg",
        description: "Get your daily dose of caffeine and compilation!",
        price: 7,
      },
      {
        _id: "2",
        name: "Python Smoothie",
        category: "Drinks",
        imgUrl: "src/images/python.jpg",
        description: "Indent your thirst away!",
        price: 8,
      },
      {
        _id: "3",
        name: "Ctrl+Alt+Delight",
        category: "Food",
        imgUrl: "src/images/ctrl_alt_del.jpg",
        description: "Three finger salute to your hunger!",
        price: 9,
      },
      {
        _id: "4",
        name: "404 Not Found Nachos",
        category: "Food",
        imgUrl: "src/images/404.jpg",
        description: "You won't get lost munching these!",
        price: 14,
      },
      {
        _id: "5",
        name: "Big Data Burger",
        category: "Food",
        imgUrl: "src/images/bigdata.jpg",
        description: "For those with a big appetite for data and calories!",
        price: 16,
      },
      {
        _id: "6",
        name: "Machine Learning Muffin",
        category: "Desserts",
        imgUrl: "src/images/machine_learning.jpg",
        description: "A dessert so good, it improves over time!",
        price: 8,
      },
      {
        _id: "7",
        name: "Git Guacamole",
        category: "Starters",
        imgUrl: "src/images/git.jpg",
        description: "Commit to your appetite!",
        price: 7,
      },
      {
        _id: "8",
        name: "Firewall Fries",
        category: "Starters",
        imgUrl: "src/images/firewall.jpg",
        description: "Too hot to bypass!",
        price: 4,
      },
      {
        _id: "9",
        name: "Aviad's Algorithm Water",
        category: "Specials",
        imgUrl: "src/images/aviad.jpg",
        description: "A brew so complex, it solves itself!",
        price: 3,
      },
      {
        _id: "10",
        name: "Chris's Code Cooler",
        category: "Specials",
        imgUrl: "src/images/chris.jpg",
        description: "Refresh your code and your thirst!",
        price: 6,
      },
      {
        _id: "11",
        name: "Vikram's Version Vino",
        category: "Specials",
        imgUrl: "src/images/vikram.jpg",
        description: "For when you need to git commit and unwind!",
        price: 8,
      },
      {
        _id: "12",
        name: "Terrence's TypeScript Ketchup Chips",
        category: "Specials",
        imgUrl: "src/images/terrence.jpg",
        description: "Strongly typed and strongly spiced!",
        price: 4,
      },
      {
        _id: "13",
        name: "Farrah's Framework Poutine",
        category: "Specials",
        imgUrl: "src/images/farrah.jpg",
        description: "A blend of the best frameworks in one cup!",
        price: 9,
      },
    ];
    setMenuItems(fetchedData);
  }, []);

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
        />
      ))}
    </div>
  );
};

export default Menu;
