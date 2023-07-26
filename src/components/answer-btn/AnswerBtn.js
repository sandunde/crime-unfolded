import React from "react";
import Button from "@mui/material/Button";
import { BiSolidKey } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AnswerBtn = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/Answers");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleRedirect}
        style={{
          marginTop: 20,
          borderColor: "#FFD700",
          color: "#FFD700",
          height: 50,
          width: 170,
        }}
      >
        answer key
        <span style={{ color: "red", marginTop: 4, marginLeft: 3 }}>
          <BiSolidKey />
        </span>
      </Button>
    </div>
  );
};

export default AnswerBtn;
