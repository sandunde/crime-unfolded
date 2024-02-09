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
                  HOW IS CRIME UNFOLDED PLAYED? ARE THERE ANY INSTRUCTIONS
                  AVAILABLE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To play Crime Unfolded, the players must identify essential
                  evidence within the case file to achieve three specific
                  objectives. Upon opening the case, the players are provided
                  with the initial objective towards convicting the killer. An
                  online answer key is available to verify if the necessary
                  evidence has been found to fulfill each objective. The answer
                  key also offers hints in case of incorrect answers. Once an
                  objective is successfully completed, players have the option
                  to open a corresponding bonus envelope, which contains
                  additional evidence and reveals the next objective. Upon
                  successfully completing all three objectives for the case, the
                  players can convict the killer and thereby close the case.
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
                  COULD YOU PROVIDE ME WITH A CLUE FOR A CASE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Have you already checked the three hints provided in the
                  answer key? In case you enter the wrong answer, there should
                  be a button that allows you to access three hints. Each hint
                  gradually reveals more about the answer, giving you the option
                  to decide how much assistance you require without completely
                  spoiling the solution. If the three hints are still
                  insufficient to find the evidence you need, you can reach out
                  to our live chat agents, if they are available. Alternatively,
                  you can send us a message, and we will aim to respond within
                  12 hours.
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
                  HOW CAN I GET TO THE ONLINE ANSWERS
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <a href="/Answers" className="answer-link">
                    To access the answer keys for our available cases, simply
                    <span style={{ color: "red" }}>CLICK HERE.</span>
                  </a>
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
                  HOW LON DOES IT TAKE TO SOLVE A CASE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The average completion time is approximately 2-3 hours,
                  although this can vary significantly based on factors such as
                  the number of players, their observational skills, and a bit
                  of luck. Most teams consisting of two or more people typically
                  finish our cases within a range of 2-6 hours.
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
                  FOR WHAT AGE DOES THE GAME SUITABLE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The majority of our Crime Unfolded cases are designed for
                  individuals aged 14 and above. We aim to maintain the content
                  at a level that would be comparable to a PG-13 movie. Most
                  older teenagers should have no trouble solving the cases on
                  their own, while some younger ones might require assistance
                  from an older friend or adult. Additionally, we have a
                  selection of kid-friendly cases that exclude any murder,
                  violence, or mature themes. These cases are specifically
                  labeled as "Family Cases."
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
                  WHAT SKILLS DOES PLAYING CRIME UNFOLDED CASES DEVELOP?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Crime Unfolded can provide you with an engaging and
                  immersive mystery-solving experience. It challenges your
                  critical thinking, problem-solving, and observational skills
                  as you work through the clues and evidence to crack the cases.
                  This type of activity can be enjoyable and intellectually
                  stimulating, making it a great option for entertainment and
                  mental exercise. By participating in these cases, you can also
                  enhance your teamwork and communication skills if you decide
                  to collaborate with others. Solving mysteries can be a fun
                  social activity that fosters bonding and shared experiences.
                  Furthermore, Unsolved Case Files offers an opportunity to
                  exercise your creativity and imagination as you immerse
                  yourself in intriguing narratives. The game can be a
                  refreshing break from routine activities and provide a sense
                  of accomplishment as you successfully unravel each case.
                  Overall, engaging with Unsolved Case Files can be a rewarding
                  and entertaining way to challenge yourself mentally, have fun,
                  and explore the world of mysteries and detective work.
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
