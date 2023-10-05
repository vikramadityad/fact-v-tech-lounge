import React, { useRef } from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Menu from "./components/Menu";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  const sectionStyle = { marginBottom: "8em" };

  return (
    <Router>
      <div className="App">
        <Navbar
          heroRef={heroRef}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          menuRef={menuRef}
          contactRef={contactRef}
        />
        {/* <div className="center-content">
          <div ref={heroRef} style={sectionStyle}>
            <Hero menuRef={menuRef} contactRef={contactRef} />
          </div>
          <div ref={servicesRef} style={sectionStyle}>
            <Services />
          </div>
          <div ref={aboutRef} style={sectionStyle}>
            <About />
          </div>
          <div ref={menuRef} style={sectionStyle}>
            <Menu />
          </div>
          <div ref={contactRef} style={sectionStyle}>
            <Contact />
          </div>
        </div>
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
