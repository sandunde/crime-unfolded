import React from "react";
import "./Header.css";
import Vid from "../../videos/crime.mov";

const Header = ({text}) => {
  return (
<div className="header-slider-container">
      <video className="header-video" src={Vid} autoPlay loop muted />
      <div className="header-slider-content">
            <h1 className="header-quote">
              {text}
            </h1>
            <div className="slider-button">
            </div>
      </div>
    </div>
  );
};

export default Header;
