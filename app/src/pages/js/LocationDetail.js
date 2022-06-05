import "../css/LocationDetail.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/js/Navbar";
import { useParams } from "react-router-dom";
import { GetLocDetail } from "../../api/Info.js";

function LocationCharacter() {
  const urlParams = useParams();
  const [detailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    const getDetailInfo = async () => {
      const response = await GetLocDetail(urlParams.id);
      setDetailInfo(response);
    };
    getDetailInfo();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="locdetail__container">
        <div className="locdetail__name">{detailInfo.name}</div>
        <div className="locdetail__type">Type : {detailInfo.type}</div>
        <div className="locdetail__dimension">
          Dimension : {detailInfo.dimension}
        </div>
      </div>
      <div className="locdetail__foto">
        <img
          className="home__ram"
          src={require("../../assets/homepage.jpg")}
          alt="rickandmor"
        />
      </div>
    </div>
  );
}

export default LocationCharacter;
