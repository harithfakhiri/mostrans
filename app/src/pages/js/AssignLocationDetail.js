import "../css/AssignLocation.css";
import React, { useState, useEffect } from "react";
import { db } from "../../api/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../../components/js/Navbar";
import { useParams } from "react-router-dom";
import { GetCharactersDetail } from "../../api/Info.js";
import CardCharacters from "../../components/js/CardCharacters";

function AssignLocationDetail() {
  const urlParams = useParams();
  const [assignedInfo, setAssignedInfo] = useState([]);
  const assignedLocationRef = collection(db, "assignedlocation");
  const [character, setCharacter] = useState([]);
  const [charactersIn, setCharactersIn] = useState([]);

  const getAssignedInfo = async () => {
    const data = await getDocs(assignedLocationRef);
    var dataUsed = data.docs.map((doc) => ({ ...doc.data() }));
    var infoDats = dataUsed.filter(function (el) {
      return el.id == urlParams.id;
    });
    setAssignedInfo(infoDats[0]);
    setCharacter(infoDats[0].residents);
  };

  useEffect(() => {
    getAssignedInfo();
  }, []);

  useEffect(() => {
    const getDetailInfo = async () => {
      const newDetail = await Promise.all(
        character.map(async (id, idx) => {
          var user = await GetCharactersDetail(id);
          const disc = user;
          return disc;
        })
      );
      setCharactersIn(newDetail);
    };
    getDetailInfo();
  }, [character]);
  return (
    <div>
      <Navbar />
      <div className="assigndetail__container">
        <div className="assigndetail__name">
          Assigned Name: {assignedInfo.assignedName}
        </div>
        <div className="assigndetail__location">
          Location Name: {assignedInfo.locationName}
        </div>
        <div className="assigndetail__type">
          Type : {assignedInfo.locationType}
        </div>
        <div className="assigndetail__dimension">
          Dimension : {assignedInfo.dimension}
        </div>
      </div>
      {charactersIn.map((char) => {
        return (
          <CardCharacters
            id={char.id}
            image={char.image}
            name={char.name}
            status={char.status}
          />
        );
      })}
    </div>
  );
}

export default AssignLocationDetail;
