import React, { useRef, useState } from "react";
// Added Apollo Client Imports
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Events from "./components/Events";
import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// Initialized Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [itemCounter, setItemCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const eventsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const sectionStyle = { marginBottom: "8em" };

  return (
    // Wrapped the application with ApolloProvider
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar
            heroRef={heroRef}
            menuRef={menuRef}
            eventsRef={eventsRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            itemCounter={itemCounter}
            setItemCounter={setItemCounter}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          <div className="center-content">
            <div ref={heroRef} style={sectionStyle}>
              <Hero menuRef={menuRef} contactRef={contactRef} />
            </div>
            <div ref={menuRef} style={sectionStyle}>
              <Menu
                setItemCounter={setItemCounter}
                itemCounter={itemCounter}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
            <div ref={eventsRef} style={sectionStyle}>
            <Events />
          </div>
           <div ref={aboutRef} style={sectionStyle}>
              <About />
            </div>
            {/* <div ref={contactRef} style={sectionStyle}>
            <Contact />
          </div> */}
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
