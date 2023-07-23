import React from "react";
import MainSlider from "../../components/slider/MainSlider";
import "./Home.css";
import Case01 from "../../img/cases/case-1.png";
import Case02 from "../../img/cases/case-2.png";
import Case03 from "../../img/cases/case-3.png";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div>
      <MainSlider />
      <h1 className="home-heading">UNRAVEL MYSTERIES, SEAL FILES</h1>
      <div className="case-container">
        <div className="cases">
          <img src={Case01} style={{ width: 400 }} alt="Case 1" />
          <h2>Isabella Grace</h2>
          <p>
            The new dean of the history <br />
            department, Isabella Grace, is found <br />
            dead in his office.
          </p>
          <Button
            variant="outlined"
            style={{
              marginTop: 20,
              borderColor: "#FFD700",
              color: "#FFD700",
              height: 50,
            }}
          >
            View Case
          </Button>
        </div>
        <div className="cases">
          <img src={Case02} style={{ width: 400 }} alt="Case 2" />
          <h2>Sophia Elizabeth</h2>
          <p>
            A high school senior fell to her death <br />
            from a window on the school’s 6th
            <br />
            floor.
          </p>
          <Button
            variant="outlined"
            style={{
              marginTop: 20,
              color: "#d3d3d3",
              borderColor: "#d3d3d3",
              height: 50,
            }}
            disabled
          >
            Coming soon
          </Button>
        </div>
        <div className="cases">
          <img src={Case03} style={{ width: 400 }} alt="Case 3" />
          <h2>Rose Martinez</h2>
          <p>
            Bride-to-be Harmony Ashcroft is <br />
            found dead the night of her <br />
            rehearsal dinner.
          </p>
          <Button
            variant="outlined"
            style={{
              marginTop: 20,
              color: "#d3d3d3",
              borderColor: "#d3d3d3",
              height: 50,
            }}
            disabled
          >
            Coming soon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
