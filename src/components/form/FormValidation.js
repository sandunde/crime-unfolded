import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  BsWhatsapp,
  BsFillEnvelopePaperFill,
  BsInstagram,
} from "react-icons/bs";
import "./FormValidation.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function ContactForm() {
  const [state, handleSubmit] = useForm("myyqzbjw");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (!isEmailValid(value)) {
      setEmailErrorMessage("Email not in the correct format");
    } else {
      setEmailErrorMessage("");
    }
  };

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
    e.preventDefault();
    if (state.submitting || !isFormValid) {
      return;
    }

    try {
      await handleSubmit(e);
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    isEmailValid(formData.email) &&
    formData.message.trim() !== "";

  return (
    <div className="contact-container">
      <div className="text-container">
        <div className="num-box">
          <div className="img-circle">
            <BsWhatsapp style={{ fontSize: 20 }} />
          </div>
          <div className="text-box">
            <h3>+94765537625</h3>
          </div>
        </div>
        <div className="num-box">
          <div className="img-circle">
            <BsFillEnvelopePaperFill style={{ fontSize: 20 }} />
          </div>
          <div className="text-box">
            <h3>crimeunfolded@gmail.com</h3>
          </div>
        </div>
        <div className="num-box">
          <div className="img-circle">
            <BsInstagram style={{ fontSize: 20 }} />
          </div>
          <div className="text-box">
            <h3>_crime.unfolded</h3>
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name" className="field-name">
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <br></br>
          <input
            id="name"
            type="text"
            name="name"
            className="input-field"
            value={formData.name}
            onChange={handleInputChange}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <br></br>
          <label htmlFor="email" className="field-name">
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <br></br>
          <input
            id="email"
            type="email"
            name="email"
            className="input-field"
            value={formData.email}
            onChange={handleEmailChange}
          />
          {emailErrorMessage && (
            <>
              <br></br>
              <span style={{ color: "red", fontSize: 10 }}>{emailErrorMessage}</span>
            </>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br></br>
          <label htmlFor="message" className="field-name">
            Comment <span style={{ color: "red" }}>*</span>
          </label>
          <br></br>
          <textarea
            id="message"
            name="message"
            className="input-field-comment"
            value={formData.message}
            onChange={handleInputChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              style={{
                marginTop: 20,
                borderColor: isFormValid ? "#FFD700" : "#9E9E9E",
                color: isFormValid ? "#FFD700" : "#9E9E9E",
                height: 40,
                type: "submit",
                width: 200,
              }}
              type="submit"
              disabled={state.submitting || !isFormValid}
            >
              Submit
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
          Form submitted successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default ContactForm;
