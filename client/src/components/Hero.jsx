import React from "react";
import PrimaryButton from "./PrimaryButton";
import "../styles/Hero.css";
import heroImg from "../images/Hero-3.jpg";

const Hero = ({ eventsRef, contactRef }) => {
  const goToEvents = () => {
    if (eventsRef && eventsRef.current) {
      eventsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactMe = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = [
    { label: "Events", action: goToEvents, type: "btn-secondary" },
    { label: "Contact Us", action: contactMe, type: "btn-secondary" },
  ];

  return (
    <div className="hero">
      <div className="hero-content">
        {/* <h1>Tech lounge for all your needs and more!</h1> */}
        <h2></h2>
        <div className="hero-buttons">
          {/* {buttons.map((button, index) => (
            <PrimaryButton
              key={index}
              label={button.label}
              action={button.action}
              type={button.type}
            />
          ))} */}
        </div>
      </div>
      <div className="hero-photo">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
