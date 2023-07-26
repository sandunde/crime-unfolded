import React, { useState, useRef } from "react";
import "./Subscribe.css";
import { useForm, ValidationError } from "@formspree/react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import emailjs from "emailjs-com";

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    emailjs
      .sendForm(
        "service_e4lezei",
        "template_ufe17ic",
        form.current,
        "BC3piJe04Qmk5Mity"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenSnackbar(true);
          setFormData({
            email: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const isFormValid = () => {
    // Check if email is in a valid format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.email.trim() !== "" && emailRegex.test(formData.email.trim());
  };

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
        <form ref={form} onSubmit={sendEmail}>
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
                borderColor: isFormValid() ? "#FFD700" : "#9E9E9E",
                color: isFormValid() ? "#FFD700" : "#9E9E9E",
                height: 40,
                width: 200,
              }}
              type="submit"
              disabled={state.submitting || !isFormValid()}
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
