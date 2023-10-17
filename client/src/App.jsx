import React, { useRef, useState } from "react";
// Added Apollo Client Imports
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Events from "./components/Events";
import About from "./components/About";
import Vip from "./components/Vip";
import VipImage from "./components/VipImage";
import Confirmation from "./components/Confirmation";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

console.log("server url is ", import.meta.env.VITE_SERVER_URL);
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_SERVER_URL || "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [itemCounter, setItemCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const eventsRef = useRef(null);
  const aboutRef = useRef(null);
  const vipRef = useRef(null);
  const vipImageRef = useRef(null);
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
            vipImageRef={vipImageRef}
            vipRef={vipRef}
            contactRef={contactRef}
            itemCounter={itemCounter}
            setItemCounter={setItemCounter}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />

          {/* <Routes>
            <Route path="confirmation" element={<Confirmation />} />
          </Routes> */}

          <div className="center-content">
            <div ref={heroRef} style={sectionStyle}>
              <Hero menuRef={menuRef} contactRef={contactRef} />
            </div>
            <div ref={menuRef} style={sectionStyle}>
              <h2 style={{ marginLeft: "20px" }}>Menu</h2>
              <Menu
                setItemCounter={setItemCounter}
                itemCounter={itemCounter}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
            <div ref={eventsRef} style={sectionStyle}>
              <Events
                setItemCounter={setItemCounter}
                itemCounter={itemCounter}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
            <div ref={aboutRef} style={sectionStyle}>
              <About />
            </div>
            <div ref={vipRef} style={sectionStyle}>
              <Vip />
            </div>
            <div ref={vipImageRef} style={sectionStyle}>
              <VipImage />
            </div>

            {/* <Routes>
              <Route path="confirmation" element={<Confirmation />} />
            </Routes> */}

            <div ref={contactRef} style={sectionStyle}>
              <ContactUs />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
