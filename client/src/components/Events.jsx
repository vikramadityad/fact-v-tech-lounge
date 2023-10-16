import React, { useState, useEffect } from "react";
import "../styles/Events.css";
import PrimaryButton from "./PrimaryButton";
import { useQuery, gql } from "@apollo/client";

const Events = ({
  itemCounter,
  setItemCounter,
  cartItems,
  setCartItems,
}) => {
  const [events, setEvents] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(null);

  const handleButtonClick = (eventId) => {
    setIsButtonActive(isButtonActive === eventId ? null : eventId);
  };


  const GET_EVENTS = gql`
    query GetEvents {
      events {
        _id
        name
        image
        description
        fee
        date
        startTime
        endTime
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_EVENTS);

  useEffect(() => {
    console.log("events1", data);
    if (data) {
      setEvents(data.events);
      console.log("eveinner", events);
    }
  }, [data]);
  console.log("eve", events);
  console.log('cartItems', cartItems)
  const addToCart = (item) => {
    // If needed logic to handle adding the item to the cart (after we will check Strip integration)
    console.log(
      `item ${item} `
    );

    const newItem = {
      id: item._id,
      name: item.name,
      price: item.fee,
      imgUrl: item.image,
      category: 'event',
    };
    setItemCounter(++itemCounter);
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };

  return (
    <section>
      <h1 className="event_header"> Upcoming Events </h1>
      <div className="event_section">
      {events.map((item) => {
        return (
            <div key={item._id} className="event-item">
              <img className="item-img" src={item.image} alt="Event Picture" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="event-links">
                <PrimaryButton
                  label="Details"
                  action= {() => handleButtonClick(item._id)}
                  type="btn-primary"
                />
                <dialog
                  className={isButtonActive === item._id ? "event_popup" : "inactive-button"}
                >
                  <PrimaryButton
                    label="Close"
                    action={handleButtonClick}
                    type="btn-primary"
                  />
                  <h3>{item.name}</h3>
                  <p>Description: {item.description}</p>
                  <p> Fee: $ {item.fee} </p>
                  <p> When: {item.date} from {item.startTime} to {item.endTime}</p>
                  <PrimaryButton
                    className="reg_btn"
                    label="Register"
                    action={addToCart.bind(this, item)}
                    type="btn-primary"
                  />
                </dialog>
                {/* <button href="/" target="_blank" rel="noopener noreferrer">Register</button> */}
              </div>
            </div>
          );
      })}
      </div>
    </section>
  );
}

export default Events;
