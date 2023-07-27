import React from "react";
import "./AnswerComponent.css";
import TaskBtn from "../../components/task-btn/TaskBtn";

const AnswerComponent = ({ imageSrc, caseId, caseTitle, task1 }) => {
  return (
    <div className="answer-container">
      <div className="answer-image-container">
        <img src={imageSrc} style={{ width: 250 }} alt="Cases"/>
      </div>
      <div className="answer-title-container">
        <h2>{caseTitle}</h2>
        <h4>{caseId}</h4>
        <div className="task-container">
          <TaskBtn btnTitle="TASK #1" redirectUrl={task1} />
          <TaskBtn btnTitle="TASK #2" redirectUrl="/About" />
          <TaskBtn btnTitle="TASK #3" redirectUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default AnswerComponent;
