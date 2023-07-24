import React from "react";
import MainSlider from "../../components/slider/MainSlider";
import "./Home.css";
import Case01 from "../../img/cases/case-1.png";
import Case02 from "../../img/cases/case-2.png";
import Case03 from "../../img/cases/case-3.png";
import Subscribe from "../../components/subscribe/Subscribe";
import Case from "../../components/cases/Case";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleViewCase1 = () => {
    navigate("/Cases");
    window.scrollTo(0, 0);
  };

  const handleViewCase2 = () => {
    navigate("/Cases");
    window.scrollTo(0, 0);
  };

  const handleViewCase3 = () => {
    navigate("/Cases");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <MainSlider />
      <div className="home-container">
        <p className="home-container-p">
          In the shadows, secrets hide and mysteries await. Will you dare to
          unravel the enigma of the night?
        </p>
      </div>
      <h1 className="home-heading">UNRAVEL MYSTERIES, SEAL FILES</h1>
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
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
