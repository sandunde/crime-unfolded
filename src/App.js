import React from "react";
import Navbar from "../src/components/menue/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Cases from "./screens/cases/Cases";
import Contact from "./screens/contact/Contact";
import OurStory from "./screens/ourStory/OurStory";
import OurTeam from "./screens/ourTeam/OurTeam";
import Support from "./screens/support/Support";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cases" element={<Cases />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
