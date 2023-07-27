import React from "react";
import "./Answers.css";
import Header from "../../components/header/Header";
import Image1 from "../../img/cases/case-1.png";
import Image2 from "../../img/cases/case-2.png";
import Image3 from "../../img/cases/case-3.png";
import AnswerComponent from "../../components/answer-comp/AnswerComponent";

const Answers = () => {
  return (
    <div>
      <Header text="Answers" />
      <div className="answer-main-container">
        <AnswerComponent
          imageSrc={Image1}
          caseTitle="ISABELLA GRACE"
          caseId="CASE ID: 1987/R2938"
          task1={"/Isabella-Task1"}
          task2={"/Isabella-Task2"}
          task3={"/Isabella-Task3"}
        />
        <div className="answer-line" />
        <AnswerComponent
          imageSrc={Image2}
          caseTitle="SOPHIA ELIZABETH"
          caseId="CASE ID: 1990/Q8338"
        />
        <div className="answer-line" />
        <AnswerComponent
          imageSrc={Image3}
          caseTitle="ROSE MARTINEZ"
          caseId="CASE ID: 2001/P7931"
        />
      </div>
    </div>
  );
};

export default Answers;
