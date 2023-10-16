import React, { useState, useEffect } from "react";
import "../styles/Events.css";
import PrimaryButton from "./PrimaryButton";
import { useQuery, gql } from "@apollo/client";

function Events() {
  const [events, setEvents] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };
  const register = () => {
    console.log("plese");
  };

  const GET_EVENTS = gql`
    query GetEvents {
      events {
        _id
        name
        image
        description
        fee
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

  return (
    <section>
      <h1 className="event_header"> Upcoming Events </h1>
      {events.map((item) => {
        return (
          <div key={item._id} className="event_section">
            <div className="event-item">
              <img
                className="item-img"
                src="src/images/menu-images/student-bootcamp-platter.jpg"
                alt="Event Picture"
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="event-links">
                <PrimaryButton
                  label="Details"
                  action={handleButtonClick}
                  type="btn-primary"
                />
                <dialog
                  className={isButtonActive ? "event_popup" : "inactive-button"}
                >
                  <PrimaryButton
                    label="Close"
                    action={handleButtonClick}
                    type="btn-primary"
                  />
                  <h3>{item.name}</h3>
                  <p>Description: {item.description}</p>
                  <p> Fee: $ {item.fee} </p>
                  <PrimaryButton
                    className="reg_btn"
                    label="Register"
                    action={register}
                    type="btn-primary"
                  />
                </dialog>
                {/* <button href="/" target="_blank" rel="noopener noreferrer">Register</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Events;
