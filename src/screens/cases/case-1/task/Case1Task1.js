import React from "react";
import "./Case1Task.css";
import TaskHeader from "../../../../components/task-header/TaskHeader";
import CaseImg from "../../../../img/case-header/case1.png";

const Case1Task1 = () => {
  return (
    <div>
      <TaskHeader
        headerImage={CaseImg}
        headerTitle="WHO KILLED ISABELLA GRACE?"
        headerDescription="Bride-to-be Isabella Grace is found dead the night of her rehearsal dinner."
      />
      <p>task 1</p>
    </div>
  );
};

export default Case1Task1;
