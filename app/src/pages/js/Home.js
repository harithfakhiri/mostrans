import "../css/home.css";

import Navbar from "../../components/js/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <img
        className="home__ram"
        src={require("../../assets/detail2.jpg")}
        alt="rickandmor"
      />
      <div className="home__welcome">Welcome to Rick and Morty's</div>
      <div className="home__welcome">info website!</div>
      <div className="home__welcome"></div>
      <div className="home__welcome"></div>
      <div className="home__welcome">Find out more about :</div>
      <div className="home__welcome"></div>
      <div className="home__welcome"></div>
      <div className="home__see" onClick={() => navigate(`/charlist`)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Go To Character List
      </div>
      <div className="home__see" onClick={() => navigate(`/loclist`)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Go To List Location
      </div>
      <div className="home__see" onClick={() => navigate(`/charbyloc`)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Go To Character by Location
      </div>
    </div>
  );
}

export default Home;
