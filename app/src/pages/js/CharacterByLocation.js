import React, { useState, useEffect } from "react";
import Navbar from "../../components/js/Navbar";
import { db } from "../../api/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import CardAssignedLoc from "../../components/js/CardAssignedLoc";
import CardCharacters from "../../components/js/CardCharacters";

function CharacterByLocation() {
  const [assignedLocation, setAssignedLocation] = useState([]);
  const assignedLocationRef = collection(db, "assignedlocation");
  useEffect(() => {
    const getAssignedLocation = async () => {
      const data = await getDocs(assignedLocationRef);
      setAssignedLocation(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getAssignedLocation();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {assignedLocation.map((loc) => {
          return (
            <div>
              <CardAssignedLoc
                id={loc.id}
                name={loc.assignedName}
                location={loc.locationName}
                type={loc.locationType}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterByLocation;
