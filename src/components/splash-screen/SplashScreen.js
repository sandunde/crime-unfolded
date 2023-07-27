import React from "react";
import "./SplashScreen.css";
import Logo from "../../img/cf-01.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img className="fade-in-out" src={Logo} alt="Logo" style={{width: 200}} />
    </div>
  );
};

export default SplashScreen;
