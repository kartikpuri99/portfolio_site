import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  return (
    <div className="row">
      <div className="col-lg-2 col-md-2 my-auto  dotclass">
        <FontAwesomeIcon icon={faChevronCircleRight} className="card-icons" />
      </div>
      <div className="col-lg-10 col-md-10 px-0 exp-cards">
        <div
          className="card bg-light mb-4 mx-auto border border-dark"
          style={{ "maxWidth": "32rem" }}
        >
          <div className="card-body w-100">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text font-weight-bold">{props.year}</p>
            <p className="card-text text-muted">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
