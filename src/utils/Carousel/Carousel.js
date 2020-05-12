import React from "react";
// import background from "../../assests/23460.jpg";
import "./Carousel.css";

const Carousel = props => {
  return (
    <div className="maincontainer mx-auto p-2 card-deck mt-4">
      <div className="card thecard ">
        <div className="front">
          <img
            src={props.projectImage}
            alt="imagess not loaded"
            className="flip-card-image"
          />
        </div>
        <div className="back">
          <div className="back-container mt-4 pt-3">
            <div className="back-head px-2">{props.projectHead}</div>
            <div className="back-text text-muted">
             {props.projectText}
            </div>
            <a
              className="btn btn-primary back-button "
              href={props.projectLink}
            >
              View the project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
