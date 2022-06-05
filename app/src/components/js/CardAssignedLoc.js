import React from "react";
import "../css/cardAssignedLoc.css";
import { useNavigate } from "react-router-dom";

function CardAssignedLoc(props) {
  const navigate = useNavigate();
  return (
    <div className="cardas__outerbox">
      <div className="cardas__container">
        <div className="cardas__assign">{props.name}</div>
        <div className="cardas__location">{props.location}</div>
        <div className="cardas__type">{props.type}</div>
      </div>
      <div
        className="cardas__see"
        onClick={() => navigate(`/assigndetail/${props.id}`)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        see characters
      </div>
    </div>
  );
}

export default CardAssignedLoc;
