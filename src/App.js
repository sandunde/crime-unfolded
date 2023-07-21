import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Note the change from 'Switch' to 'Routes'

import Home from "./screens/Home";
import About from "./screens/About";
import Cases from "./screens/Cases";
import Contact from "./screens/Contact";
import OurStory from "./screens/OurStory";
import OurTeam from "./screens/OurTeam";
import Support from "./screens/Support";

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
    </Router>
  );
}

export default App;
