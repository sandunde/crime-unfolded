import React, { useState } from "react";
import "./Subscribe.css";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Subscribe = () => {
  const [state, handleSubmit] = useForm("myyqzbok");
  const [formData, setFormData] = useState({
    email: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleFormSubmit = async (e) => {
    if (state.submitting || !isFormValid) {
      return;
    }

    try {
      await handleSubmit(e);
      setOpenSnackbar(true);
      setFormData({
        email: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const isFormValid = formData.email.trim() !== "";

  return (
    <div className="subscribe-container">
      <h1 className="center-text-h1">
        RECEIVE ALERTS FOR NEWLY AVAILABLE CASES TO SOLVE
      </h1>
      <h2 className="center-text-h2">
        PROVIDE YOUR EMAIL TO RECEIVE UPDATES, DISCOUNTS, AND COMPLEMENTARY
        CASES FROM US
      </h2>
      <div className="center-content">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email" className="field-name-subscribe">
            Email Address
          </label>
          <br></br>
          <input
            id="email"
            type="email"
            name="email"
            className="input-field-subscribe"
            value={formData.email}
            onChange={handleInputChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              style={{
                marginTop: 20,
                borderColor: isFormValid ? "#FFD700" : "#9E9E9E",
                color: isFormValid ? "#FFD700" : "#9E9E9E",
                height: 45,
                width: 200,
              }}
              type="submit"
              disabled={state.submitting || !isFormValid}
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Thank you for Subscribing!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Subscribe;
