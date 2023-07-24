import React from "react";
import Navbar from "../src/components/menue/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Cases from "./screens/cases/Cases";
import Contact from "./screens/contact/Contact";
import Support from "./screens/support/Support";
import Footer from "./components/footer/Footer";
import ScrollUpButton from "./components/scroll/ScrollUpButton";
import Error404 from "./screens/error404/Error404";
import Case1 from "./screens/cases/case-1/Case1";
import Case2 from "./screens/cases/case-2/Case2";
import Case3 from "./screens/cases/case-3/Case3";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cases" element={<Cases />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Isabella" element={<Case1 />} />
        <Route path="/Sophia" element={<Case2 />} />
        <Route path="/Rose" element={<Case3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ScrollUpButton />
      <Footer />
    </Router>
  );
}

export default App;
