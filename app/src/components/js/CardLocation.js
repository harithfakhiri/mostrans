import React from "react";
import "../css/cardLocation.css";
import { useNavigate } from "react-router-dom";

function CardLocation(props) {
  const navigate = useNavigate();
  return (
    <div className="cardloc__outerbox">
      <div className="cardloc__container">
        <div className="cardloc__name">{props.name}</div>
        <div className="cardloc__type">{props.type}</div>
      </div>
      <div
        className="cardloc__see"
        onClick={() => navigate(`/locChar/${props.id}`)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        see details
      </div>
    </div>
  );
}

export default CardLocation;
