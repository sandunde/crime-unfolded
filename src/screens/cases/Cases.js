import React from "react";
import Header from "../../components/header/Header";
import Subscribe from "../../components/subscribe/Subscribe";
import "./Cases.css";
import Case from "../../components/cases/Case";
import Case01 from "../../img/cases/case-1.png";
import Case02 from "../../img/cases/case-2.png";
import Case03 from "../../img/cases/case-3.png";
import { useNavigate } from "react-router-dom";

const Cases = () => {
  const navigate = useNavigate();
  const handleViewCase1 = () => {
    navigate("/Isabella");
    window.scrollTo(0, 0);
  };

  const handleViewCase2 = () => {
    navigate("/Sophia");
    window.scrollTo(0, 0);
  };

  const handleViewCase3 = () => {
    navigate("/Rose");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Header text="CASES" />
      <div className="case-container">
        <Case
          imageSrc={Case01}
          title="Isabella Grace"
          description="The new dean of the history department, Isabella Grace, is found dead in his office."
          buttonLabel="View Case"
          buttonColor="#FFD700"
          onButtonClick={handleViewCase1}
        />
        <Case
          imageSrc={Case02}
          title="Sophia Elizabeth"
          description="A high school senior fell to her death from a window on the school’s 6th floor."
          buttonLabel="Coming soon"
          buttonColor="#d3d3d3"
          buttonDisabled
          onButtonClick={handleViewCase2}
        />
        <Case
          imageSrc={Case03}
          title="Rose Martinez"
          description="Bride-to-be Harmony Ashcroft is found dead the night of her rehearsal dinner."
          buttonLabel="Coming soon"
          buttonColor="#d3d3d3"
          buttonDisabled
          onButtonClick={handleViewCase3}
        />
        <Case
          imageSrc={Case01}
          title="Isabella Grace"
          description="The new dean of the history department, Isabella Grace, is found dead in his office."
          buttonLabel="View Case"
          buttonColor="#FFD700"
          onButtonClick={handleViewCase1}
        />
        <Case
          imageSrc={Case02}
          title="Sophia Elizabeth"
          description="A high school senior fell to her death from a window on the school’s 6th floor."
          buttonLabel="Coming soon"
          buttonColor="#d3d3d3"
          buttonDisabled
          onButtonClick={handleViewCase2}
        />
        <Case
          imageSrc={Case03}
          title="Rose Martinez"
          description="Bride-to-be Harmony Ashcroft is found dead the night of her rehearsal dinner."
          buttonLabel="Coming soon"
          buttonColor="#d3d3d3"
          buttonDisabled
          onButtonClick={handleViewCase3}
        />
      </div>
      <Subscribe />
    </div>
  );
};

export default Cases;
