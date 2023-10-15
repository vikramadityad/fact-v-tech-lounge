import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import "../styles/Navbar.css";
import logo from "../images/logo-h.png";
import CartButton from "./CartButton";
// import CartButton from "./CartButton";
import About from "./About";
import Auth from "./Login";

const Navbar = ({
  heroRef,
  eventsRef,
  aboutRef,
  menuRef,
  contactRef,
  itemCounter,
  setItemCounter,
  cartItems,
  setCartItems,
}) => {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
    setIsLoggedIn(true);
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

        <div className="header-right" style={{ display: "flex" }}>
          <div>
            <CartButton
              itemCounter={itemCounter}
              setItemCounter={setItemCounter}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </div>
          {isLoggedIn ? (
            <PrimaryButton label="My Account" type="btn-secondary" />
          ) : (
            <PrimaryButton
              label="Login"
              action={handleLoginClick}
              type="btn-secondary"
            />
          )}
        </div>
      </div>
      {isLoginModalOpen && (
        <div className="login-modal">
          <Auth onClose={handleCloseLoginModal} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
