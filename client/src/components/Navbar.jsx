import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import CartButton from "./CartButton";
import Auth from "./Login";
import MyAccount from "./MyAccount";
import logo from "../images/logo-h.png";
import "../styles/Navbar.css";

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
  const [isMyAccountModalOpen, setIsMyAccountModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    closeMenu();
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleMyAccountClick = () => {
    setIsMyAccountModalOpen(true);
    closeMenu();
  };

  const handleCloseMyAccountModal = () => {
    setIsMyAccountModalOpen(false);
  };

  const handleLoginStateUpdate = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="nav-main" role="banner">
      <div className="nav-wrapper">
        <div className="header-left">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMenuOpen ? "open" : ""}`} />
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`} role="navigation">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={isActive(item.path)}>
                <Link to={item.path} onClick={() => scrollToSection(item.ref)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right-side Buttons */}
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
              <PrimaryButton
                label="My Account"
                type="btn-secondary"
                action={handleMyAccountClick}
              />
            ) : (
              <PrimaryButton
                label="Login"
                action={handleLoginClick}
                type="btn-secondary"
              />
            )}
          </div>
        </nav>
      </div>

      {/* Modal for My Account */}
      {isMyAccountModalOpen && (
        <div className="myaccount-modal">
          <MyAccount onClose={handleCloseMyAccountModal} />
        </div>
      )}

      {/* Modal for Login */}
      {isLoginModalOpen && (
        <div className="login-modal">
          <Auth onClose={handleCloseLoginModal} onLogin={handleLoginStateUpdate} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
