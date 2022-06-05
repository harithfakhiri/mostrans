import "../css/DetailCharacter.css";

import Navbar from "../../components/js/Navbar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetCharactersDetail, GetAllLocationAllPages } from "../../api/Info.js";

function DetailCharacter(props) {
  const urlParams = useParams();
  const [detailInfo, setDetailInfo] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getDetailInfo = async () => {
      const response = await GetCharactersDetail(urlParams.id);
      setDetailInfo(response);
    };
    getDetailInfo();
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      const response = await GetAllLocationAllPages();
      setLocation(response);
    };
    getLocation();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="detail__container">
        <div className="detail__pic">
          <img src={detailInfo.image}></img>
        </div>
        <div className="detail__info">
          <div className="detail__name">{detailInfo.name}</div>
          <div className="detail__status">Status : {detailInfo.status}</div>
          <div className="detail__spesies">Species : {detailInfo.species}</div>
          <div className="detail__gender">Gender : {detailInfo.gender}</div>
          <div className="detail__location">
            <label for="location">Choose a location:</label>
            <select name="location" id="location">
              {location.map((dummy, idx) => {
                return <option value={dummy.id}>{dummy.name}</option>;
              })}
            </select>
            <label for="fname">Assign Location Name:</label>
            <input type="text" id="fname" name="fname" value="" />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCharacter;
