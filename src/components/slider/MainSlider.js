import React, { useEffect, useState } from "react";
import Vid from "../../videos/crime-2.mp4";
import logo from "../../img/cf-01.png";
import "./MainSlider.css";
import Button from "@mui/material/Button";

const MainSlider = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElements(true);
    }, 1000);
  }, []);

  return (
    <div className="slider-container">
      <video src={Vid} autoPlay loop muted />
      <div className={`slider-content ${showElements ? "fadeIn" : ""}`}>
        {showElements && (
          <>
            <img
              src={logo}
              style={{ width: 300, marginBottom: 20 }}
              alt="Logo"
            />
            <h1 className="quote">
              Step into the role of a seasoned detective,
              <br /> tasked with solving cold cases and mysteries.
            </h1>
            <div className="slider-button">
              <Button
                variant="outlined"
                style={{
                  marginTop: 20,
                  borderColor: "#FFD700",
                  color: "#FFD700",
                  height: 50,
                }}
              >
                Explore available cases
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainSlider;
