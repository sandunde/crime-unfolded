import React from "react";
import "./HowToPlay.css";
import Header from "../../components/header/Header";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

const Help = () => {
  return (
    <div>
      <Header text="HOW TO PLAY" />
      <div className="how-to-play">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="Open your case file and read the first objective sticker, which can be found on the inside of the front cover of the case."
                placement="right"
              >
                <span>
                  Get Your First Objective <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                color="primary"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="Begin your investigation reading through ALL the newspaper clippings, police documents, photos, evidence, and other items in the case. As you learn about the crime scene, suspects, witnesses and other details of the investigation, look for information or evidence that helps you complete Objective #1. Just like a real cold case detective, nobody is going to tell you where the answer is. "
                placement="left"
              >
                <span>
                  Read the Case File <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                color="secondary"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="After you think you've found the evidence you need for Objective #1, visit the online answers page to enter in the documents that prove your theory."
                placement="right"
              >
                <span>
                  Check Your Theory Online <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="Don't worry if your theory isn't correct because this ain’t easy. If your answer is incorrect you can either return to the case files and dig for more clues or get hints through the online answer key. The hint button won't appear on the answer key until AFTER you've entered a wrong answer."
                placement="left"
              >
                <span>
                  Get Hints If You Need Them <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="The answer key will confirm when you have the right evidence and when you can open Bonus Envelope A, which will provide more evidence and your second objective."
                placement="right"
              >
                <span>
                  Open Bonus Envelope A <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="Follow those same steps to complete Objectives 2 and 3 and open Bonus Envelopes B and C."
                placement="left"
              >
                <span>
                  Repeat for Objectives 2 & 3 <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="After completing Objective 3, you'll have solved the case and put the killer behind bars. Don't forget to open Bonus Envelope #C for wrap up information and additional goodies about the case."
                placement="right"
              >
                <span>
                  Bask in Your Glory Detective <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                style={{
                  borderColor: "#b22222",
                  height: "10px",
                  width: "10px",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Tooltip
                title="If you had fun being a cold case detective, please share your experience on social media or write a review online so others can also have fun being a cold case detective for a few hours."
                placement="left"
              >
                <span>
                  Don't Stop There <BsInfoCircle />
                </span>
              </Tooltip>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Help;
