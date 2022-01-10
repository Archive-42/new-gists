import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

return (
    <div className="container" style={{ textAlign: "center" }}>
      <Nav />
      <Router>
        <Home path="/" />
        <ContactUs path="/contact-us" />
        <AboutUs path="/about-us" />
      </Router>
    </div>
  );
