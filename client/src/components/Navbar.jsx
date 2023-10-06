import React from "react";
import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import "../styles/Navbar.css";
import logo from "../images/logo-h.png";

const Navbar = ({ heroRef, eventsRef, aboutRef, menuRef, contactRef }) => {
  const location = useLocation();

  // Dynamic navigation items
  const navItems = [
    { name: "Home", path: "/", ref: heroRef },
    { name: "Menu", path: "/menu", ref: menuRef },
    { name: "Events", path: "/events", ref: eventsRef },
    { name: "About", path: "/about", ref: aboutRef },
  ];

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="nav-main" role="banner">
      <div className="nav-wrapper">
        <div className="header-left">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="logo" className="navbar-logo" />
          </Link>
        </div>
        <nav className="navbar-links" role="navigation">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={isActive(item.path)}>
                <Link to={item.path} onClick={() => scrollToSection(item.ref)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <PrimaryButton
            label="Contact Us"
            action={handleContactClick}
            type="btn-primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
