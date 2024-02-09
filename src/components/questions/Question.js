import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "./Question.css";

const Question = ({
  title,
  questions,
  hints,
  correctAnswers,
  successMessage,
  envelopeMessage,
  taskNum,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [showHintIndex, setShowHintIndex] = useState(0);
  const [hint, setHint] = useState(false);

  const handleCheckboxChange = (questionId) => {
    const isSelected = selectedAnswers.includes(questionId);
    if (isSelected) {
      setSelectedAnswers(selectedAnswers.filter((id) => id !== questionId));
    } else {
      setSelectedAnswers([...selectedAnswers, questionId]);
    }
  };

  const isButtonDisabled = selectedAnswers.length !== correctAnswers.length;

  const handleSubmit = () => {
    const userCorrectCount = selectedAnswers.filter((id) =>
      correctAnswers.includes(id)
    ).length;

    setCorrectCount(userCorrectCount);
    setSubmitAnswer(true);

    console.log(
      `You got ${userCorrectCount} correct answers out of ${correctAnswers.length}.`
    );
  };

  const handleGoBack = () => {
    setHint(false);
    setSelectedAnswers([]);
    setCorrectCount(0);
    setSubmitAnswer(false);
    setShowHintIndex(0);
  };

  const handleShowHint = () => {
    setHint(true);
    if (showHintIndex < hints.length - 1) {
      setShowHintIndex(showHintIndex + 1);
    } else {
      setShowHintIndex(hints.length);
    }
  };

  return (
    <div className="question-main-container">
      <h2 className="question-title">{title}</h2>
      <div className="question-container">
        {!submitAnswer ? (
          <>
            <h2>{questions.mainQuestion}</h2>
            <h4>{questions.instructions}</h4>
            <br />
            <h4>{questions.questionText}</h4>
            <br></br>
            <div className="question-line"></div>
            {questions.choices.map((question) => (
              <div className="question-box" key={question.id}>
                <Checkbox
                  sx={{
                    color: "#ffd700",
                    "&.Mui-checked": {
                      color: "#ffd700",
                    },
                  }}
                  checked={selectedAnswers.includes(question.id)}
                  onChange={() => handleCheckboxChange(question.id)}
                />
                <p className="question">{question.text}</p>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                style={{
                  marginTop: 20,
                  borderColor: isButtonDisabled ? "#9E9E9E" : "#FFD700",
                  color: isButtonDisabled ? "#9E9E9E" : "#FFD700",
                  height: 30,
                  width: 130,
                }}
                type="submit"
                disabled={isButtonDisabled}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
            {isButtonDisabled && (
              <p style={{ color: "red", textAlign: "center", marginTop: 10 }}>
                Please select exactly {correctAnswers.length} answers.
              </p>
            )}
          </>
        ) : (
          <>
            {correctCount === correctAnswers.length ? (
              <div style={{ textAlign: "center" }}>
                <h2>You Solved Task #{taskNum}</h2>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: "20px",
                  }}
                >
                  {successMessage}
                </p>
                <p>
                  Great work! You can now open the envelope marked: BONUS
                  ENVELOPE {envelopeMessage}
                </p>
              </div>
            ) : (
              <div style={{ textAlign: "center", marginTop: 10 }}>
                {!hint && (
                  <p>
                    You got {correctCount} correct answers out of{" "}
                    {correctAnswers.length}.
                  </p>
                )}
                {showHintIndex > 0 && showHintIndex <= hints.length && (
                  <div>
                    <p className="hint-no"> Hint #{showHintIndex}</p>
                    <p className="hint">
                      <br></br>
                      {hints[showHintIndex - 1].text}
                    </p>
                  </div>
                )}
                <Button
                  variant="outlined"
                  style={{
                    marginTop: 30,
                    borderColor: "#FFD700",
                    color: "#FFD700",
                    height: 30,
                    width: 130,
                  }}
                  onClick={handleGoBack}
                >
                  Go Back
                </Button>
                <br></br>
                {showHintIndex <= hints.length && (
                  <>
                    {showHintIndex < hints.length && (
                      <Button
                        variant="outlined"
                        style={{
                          marginTop: 20,
                          borderColor: "#FFD700",
                          color: "#FFD700",
                          height: 30,
                          width: 130,
                        }}
                        onClick={handleShowHint}
                        disabled={showHintIndex === hints.length}
                      >
                        Want a hint
                      </Button>
                    )}
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
