import React, { useState, useEffect } from "react";
import Navbar from "../src/components/menu/NavBar";
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
import DialogflowChatbot from "./components/chatbot/DialogflowChatbot";
import Answers from "./screens/answers/Answers";
import Subscribe from "./components/subscribe/Subscribe";
import Case1Task1 from "./screens/cases/case-1/task/Case1Task1";
import Case1Task2 from "./screens/cases/case-1/task/Case1Task2";
import Case1Task3 from "./screens/cases/case-1/task/Case1Task3";
import SplashScreen from "./components/splash-screen/SplashScreen";
import Help from "./screens/help/HowToPlay";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    (<Router>
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
        <Route path="/Answers" element={<Answers />} />
        <Route path="/How-To-Play" element={<Help />} />
        <Route path="/Isabella-Task1" element={<Case1Task1 />} />
        <Route path="/Isabella-Task2" element={<Case1Task2 />} />
        <Route path="/Isabella-Task3" element={<Case1Task3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ScrollUpButton />
      {/* <DialogflowChatbot /> */}
      <Subscribe />
      <Footer />
    </Router>)
  );
}

export default App;
