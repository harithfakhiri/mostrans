import React from "react";
import "../css/cardCharacters.css";
import { useNavigate } from "react-router-dom";

function CardCharacters(props) {
  const navigate = useNavigate();

  return (
    <div className="cardchar__outerbox">
      <div className="cardchar__left">
        <img
          className="home__ram"
          src={props.image}
          alt=""
          width="85"
          height="85"
        />
      </div>
      <div className="cardchar__right">
        <div className="cardchar__name">{props.name}</div>
        <div className="cardchar__status">{props.status}</div>
        <div
          className="cardchar__see"
          onClick={() => navigate(`/detailchar/${props.id}`)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          See Detail
        </div>
      </div>
    </div>
  );
}

export default CardCharacters;
