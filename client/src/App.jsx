<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Menu from "./components/Menu";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";

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
>>>>>>> 26e42d0 (restructured to add client and server folders along with installed concurrently package to root folder)
