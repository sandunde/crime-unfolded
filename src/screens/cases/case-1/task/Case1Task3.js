import React from "react";
import "./Case1Task.css";
import TaskHeader from "../../../../components/task-header/TaskHeader";
import CaseImg from "../../../../img/case-header/case1.png";
import Question from "../../../../components/questions/Question";

const Case1Task3 = () => {
  const questionSet1 = {
    mainQuestion: "Can You Prove Bones Is Innocent?",
    instructions:
      "Do you know how to prove Bones is not guilty? Prove it below to move on to the next part of the case.",
    questionText:
      "What two documents prove Bones did not kill Harmony Ashcroft?",
    choices: [
      {
        id: 1,
        text: "Article Titled - Popular Local Child Psychologist Murdered",
      },
      {
        id: 2,
        text: "Article Titled - Bones McBride Arrested for Murder of Harmony Ashcroft",
      },
      { id: 3, text: "Coroner's Report" },
      { id: 4, text: "Crime Scene Photo - Front of Restaurant" },
      { id: 5, text: "Crime Scene Photo - Back Alley" },
      { id: 6, text: "Crime Scene Photo - Harmony's Body" },
      { id: 7, text: "Evidence Report" },
      { id: 8, text: "Little League Picture - Harmony & 2 Boys" },
      { id: 9, text: "Map of Riverdale" },
      { id: 10, text: "Mugshot photo of Bones McBride" },
      { id: 11, text: "Photo of Engagement Ring" },
      { id: 12, text: "Smiling picture of Harmony" },
      { id: 13, text: "Wilson County Family Court Order" },
      { id: 14, text: "Helping Hands Phone Records" },
      { id: 15, text: "Suspect Photo - Rex Ratliff" },
      { id: 16, text: "Suspect Photo - Andy Allen" },
      { id: 17, text: "Suspect Photo - Bones McBride" },
      { id: 18, text: "Suspect Photo - Christian Peterson" },
      { id: 19, text: "Suspect Photo - Derek Sivers" },
      { id: 20, text: "Person of Interest Sheet - Andy Allen" },
      { id: 21, text: "Person of Interest Sheet - Bones McBride" },
      { id: 22, text: "Person of Interest Sheet - Christian Peterson" },
      { id: 23, text: "Person of Interest Sheet - Derek Sivers" },
      { id: 24, text: "Person of Interest Sheet - Rex Ratliff" },
      { id: 25, text: "Suspect Interview - Andy Allen" },
      { id: 26, text: "Suspect Interview - Bones McBride" },
      { id: 27, text: "Suspect Interview - Christian Peterson" },
      { id: 28, text: "Suspect Interview - Derek Sivers" },
      { id: 29, text: "Suspect Interview - Rex Ratliff" },
      { id: 30, text: "Witness Photo - Admiral Arthurson" },
      { id: 31, text: "Witness Photo - Chad Highsmith" },
      { id: 32, text: "Witness Photo - Cheryl Pratt" },
      { id: 33, text: "Witness Photo - Chris Adams" },
      { id: 34, text: "Witness Photo - Jason Griggs" },
      { id: 35, text: "Witness Photo - Jenny Rogers" },
      { id: 36, text: "Witness Photo - Louise McCoy" },
      { id: 37, text: "Witness Photo - Officer Grayson" },
      { id: 38, text: "Witness Photo - Wally Bryson" },
      { id: 39, text: "Witness Statement Form - Admiral Arthurson" },
      { id: 40, text: "Witness Statement Form - Chad Highsmith" },
      { id: 41, text: "Witness Statement Form - Cheryl Pratt" },
      { id: 42, text: "Witness Statement Form - Chris Adams" },
      { id: 43, text: "Witness Statement Form - Jason Griggs" },
      { id: 44, text: "Witness Statement Form - Jenny Rogers" },
      { id: 45, text: "Witness Statement Form - Louise McCoy" },
      { id: 46, text: "Witness Statement Form - Officer Grayson" },
      { id: 47, text: "Witness Statement Form - Wally Bryson" },
    ],
  };

  const hintSet1 = [
    {
      id: 1,
      text: "One of the two documents you'll need is a photo from the crime scene.",
    },
    {
      id: 2,
      text: "When you find the right evidence for this part of the case it will be indisputable who was lying about their alibi. You're not looking for a small obscure detail.",
    },
    { id: 3, text: "Do you own a magnifying glass?" },
  ];
  return (
    <div>
      <TaskHeader
        headerImage={CaseImg}
        headerTitle="WHO KILLED ISABELLA GRACE?"
        headerDescription="Bride-to-be Isabella Grace is found dead the night of her rehearsal dinner."
      />
      <Question
        title="HELP WESTHAM POLICE TO FIND THE TRUTH"
        questions={questionSet1}
        hints={hintSet1}
        correctAnswers={[1, 20]}
        successMessage="You Proved Bones is Innocent!"
      />
    </div>
  );
};

export default Case1Task3;
