import React from "react";
import "./Error404.css";
import Header from "../../components/header/Header";
import ErrorImg from "../../img/404.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="error-container">
      <Header text="LOST IN THE SHADOWS" />
      <div className="error-heading">
        <p className="error-heading-p">
          Dare you continue on this haunting journey, or will you turn back and
          forever wonder what horrors lie beyond the veil of this Error 404
          page?
        </p>
      </div>
      <img src={ErrorImg} alt="Error Page" />
      <div className="error-button">
        <Button
          variant="outlined"
          style={{
            marginTop: 20,
            borderColor: "#FFD700",
            color: "#FFD700",
            height: 50,
          }}
          onClick={handleBackToHome}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Error404;
