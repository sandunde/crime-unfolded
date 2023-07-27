import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./Support.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRedirect = () => {
    navigate("/Contact");
    window.scrollTo(0, 0);
  };
  const handleHelp = () => {
    navigate("/How-To-Play");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header text="SUPPORT" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="support-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            How Can We Help You?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span style={{ fontWeight: 700 }}>Contact Us Page: </span>
            You can email us directly by visiting our Contact Us page. Simply
            fill out the form, and one of our dedicated team members will get
            back to you promptly.<br></br>
            <br></br>
            <span style={{ fontWeight: 700 }}>Sherlock-AI: </span>
            Alternatively, you can take advantage of our efficient chatbot
            feature. Just type "Resolve a case" in the chat, and our intelligent
            assistant will guide you through the process.
          </Typography>
          <div className="model-btn-container">
            <Button
              variant="outlined"
              onClick={handleRedirect}
              style={{
                marginTop: 20,
                borderColor: "#d22222",
                color: "#d22222",
                height: 50,
                width: 170,
              }}
            >
              Contact us
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{
                marginTop: 20,
                borderColor: "#d22222",
                color: "#d22222",
                height: 50,
                width: 170,
              }}
            >
              Sherlock-AI
            </Button>
          </div>
        </Box>
      </Modal>
      <div className="support-container">
        <div className="btn-container">
          <Button
            variant="outlined"
            onClick={handleOpen}
            style={{
              marginTop: 20,
              borderColor: "#FFD700",
              color: "#FFD700",
              height: 50,
              width: 170,
            }}
          >
            Help With A Case
          </Button>
          <Button
            variant="outlined"
            onClick={handleHelp}
            style={{
              marginTop: 20,
              borderColor: "#FFD700",
              color: "#FFD700",
              height: 50,
              width: 170,
            }}
          >
            How To Play
          </Button>
        </div>
        <div className="accordion">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accordion-title">
                  WHAT ARE THE INSTRUCTIONS FOR PLAYING CRIME UNFOLDED?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ​Completing an Crime Unfolded game involves identifying the
                  necessary evidence within the case file to accomplish three
                  objectives. When you open the case you will be given the first
                  objective toward convicting the killer. The online answer key
                  tells you if you found the necessary evidence to complete each
                  objective. The answer key includes hints if you get the answer
                  wrong. After each objective is completed, players can open the
                  appropriate bonus envelope with additional evidence and their
                  next objective. After completing the 3 objectives for the
                  case, you will convict the killer and close the case!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordion-title">
                  COULD YOU OFFER ME A CLUE ABOUT A SITUATION?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Did you already read the three hints available on the answer
                  key? If you enter the wrong answer there should be a button
                  that allows you to access 3 hints. Each hint reveals more of
                  the answer so you can choose how much help you really need
                  without spoiling the answer. If the three hints still do not
                  help you find the evidence, please use our live chat agents if
                  available and if not, you can send us a message and we should
                  reply within 12 hours.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordion-title">
                  HOW CAN I GAIN ACCESS TO THE ANSWERS AVAILABLE ONLINE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ​CLICK HERE to access the answer keys for our available cases
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordion-title">
                  HOW CAN I GAIN ACCESS TO THE ANSWERS AVAILABLE ONLINE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ​CLICK HERE to access the answer keys for our available cases
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordion-title">
                  HOW CAN I GAIN ACCESS TO THE ANSWERS AVAILABLE ONLINE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ​CLICK HERE to access the answer keys for our available cases
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordion-title">
                  HOW CAN I GAIN ACCESS TO THE ANSWERS AVAILABLE ONLINE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ​CLICK HERE to access the answer keys for our available cases
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordion-title">
                  HOW CAN I GAIN ACCESS TO THE ANSWERS AVAILABLE ONLINE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ​CLICK HERE to access the answer keys for our available cases
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
