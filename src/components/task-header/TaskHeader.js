import React from "react";
import "./TaskHeader.css";

const TaskHeader = ({headerImage, headerTitle, headerDescription}) => {
  return (
    <div className="case-file-container">
      <img src={headerImage} className="case-img" alt="Isabella" />
      <div className="case-file-header">
        <h1 className="case-file-header-text">{headerTitle}</h1>
        <p className="case-file-header-text-p">
          {headerDescription}
        </p>
      </div>
    </div>
  );
};

export default TaskHeader;
