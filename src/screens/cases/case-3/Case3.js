import React, { useState } from "react";
import "./Case3.css";
import CaseImg from "../../../img/case-header/case3.png";
import Button from "@mui/material/Button";
import { BiMoney, BiSolidKey } from "react-icons/bi";
import Case01 from "../../../img/cases/case-1.png";
import Case02 from "../../../img/cases/case-2.png";
import Case03 from "../../../img/cases/case-3.png";
import Subscribe from "../../../components/subscribe/Subscribe";

const Case1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setShowModal(false);
  };

  return (
    <div className="case-main-container">
      <div className="case-file-container">
        <img src={CaseImg} className="case-img" />
        <div className="case-file-header">
          <h1 className="case-file-header-text">WHO KILLED ISABELLA GRACE?</h1>
          <p className="case-file-header-text-p">
            Bride-to-be Isabella Grace is found dead the night of her rehearsal
            dinner.
          </p>
        </div>
      </div>
      <div className="btn-container">
        <Button
          variant="outlined"
          style={{
            marginTop: 20,
            borderColor: "#FFD700",
            color: "#FFD700",
            height: 50,
            width: 170,
          }}
        >
          Buy - රු5000.00
          <span style={{ color: "red", marginTop: 4, marginLeft: 3 }}>
            <BiMoney />
          </span>
        </Button>
        <Button
          variant="outlined"
          style={{
            marginTop: 20,
            borderColor: "#FFD700",
            color: "#FFD700",
            height: 50,
            width: 170,
          }}
        >
          answer key
          <span style={{ color: "red", marginTop: 4, marginLeft: 3 }}>
            <BiSolidKey />
          </span>
        </Button>
      </div>
      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div>
      <h2 className="case-description-title">
        ISABELLA GRACE - CRIME UNFOLDED
      </h2>
      <p className="case-description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec est
        varius, rhoncus ipsum et, tincidunt felis. Quisque facilisis nisl in
        magna pellentesque aliquam. Cras non pharetra eros. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin dapibus justo quis tortor tincidunt, sit amet consectetur
        magna dapibus. Maecenas lacinia sapien ut metus tristique, vel blandit
        justo congue. Integer ultrices, odio in dictum facilisis, nisi ligula
        efficitur eros, ac aliquam mauris tellus sit amet justo. Sed sit amet
        cursus felis, a semper mauris. Pellentesque nec nulla eu sapien interdum
        pharetra vel ac elit. Nullam quis ipsum vel est dapibus condimentum.
        Vestibulum venenatis lorem mi, eget luctus risus dignissim nec. Vivamus
        in odio ipsum. In eu est ac nisl hendrerit tincidunt. Donec scelerisque
        justo a libero tempus, in tincidunt
      </p>
      <div className="img-section">
        {[
          { src: Case01, alt: "Image 1" },
          { src: Case02, alt: "Image 2" },
          { src: Case03, alt: "Image 3" },
          { src: Case01, alt: "Image 4" },
        ].map((image, index) => (
          <div
            key={index}
            className="img-container"
            onClick={() => handleImageClick(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {showModal && selectedImageIndex !== null && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <img
            src={[Case01, Case02, Case03, Case01][selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="modal-content"
          />
        </div>
      )}
      <Subscribe />
    </div>
  );
};

export default Case1;
