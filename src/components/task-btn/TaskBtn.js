import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const TaskBtn = ({ btnTitle, redirectUrl }) => {
  const navigate = useNavigate();

  const handleTaskRedirect = () => {
    navigate(redirectUrl);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleTaskRedirect}
        style={{
          marginTop: 20,
          borderColor: "#b22222",
          color: "#b22222",
          height: 50,
          width: 170,
        }}
      >
        {btnTitle}
      </Button>
    </div>
  );
};

export default TaskBtn;
