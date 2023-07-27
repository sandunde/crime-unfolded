import React, { useState } from "react";
import "./Case1.css";
import CaseImg from "../../../img/case-header/case1.png";
import Case01 from "../../../img/cases/case-1.png";
import Case02 from "../../../img/cases/case-2.png";
import Case03 from "../../../img/cases/case-3.png";
import AnswerBtn from "../../../components/answer-btn/AnswerBtn";
import PurchaseBtn from "../../../components/purchase-btn/PurchaseBtn";
import TaskHeader from "../../../components/task-header/TaskHeader";

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
      <TaskHeader
        headerImage={CaseImg}
        headerTitle="WHO KILLED ISABELLA GRACE?"
        headerDescription="Bride-to-be Isabella Grace is found dead the night of her rehearsal dinner."
      />
      <div className="btn-container">
        <PurchaseBtn />
        <AnswerBtn />
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
            alt={`Isabella ${selectedImageIndex + 1}`}
            className="modal-content"
          />
        </div>
      )}
    </div>
  );
};

export default Case1;
