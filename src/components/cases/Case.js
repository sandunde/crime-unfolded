import React from "react";
import Button from "@mui/material/Button";
import "./Case.css"

const Case = ({ imageSrc, title, description, buttonLabel, buttonColor, buttonDisabled, onButtonClick }) => {
  return (
    <div className="cases">
      <img src={imageSrc} style={{ width: 400 }} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button
        variant="outlined"
        style={{
          marginTop: 20,
          borderColor: buttonColor,
          color: buttonColor,
          height: 50,
        }}
        disabled={buttonDisabled}
        onClick={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Case;
