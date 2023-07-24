import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollUpButton.css";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const scrollPercentage =
      (scrollPosition / (scrollHeight - clientHeight)) * 100;

    if (scrollPercentage >= 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-up-button ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FiArrowUp />
    </div>
  );
};

export default ScrollUpButton;
