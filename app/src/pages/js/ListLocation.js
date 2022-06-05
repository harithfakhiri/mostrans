import "../css/ListLocation.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/js/Navbar";
import CardLocation from "../../components/js/CardLocation";
import { GetAllLocation } from "../../api/Info.js";

function ListLocation() {
  const [location, setLocation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getLocation = async () => {
    const response = await GetAllLocation(currentPage);
    setLocation(response);
  };

  useEffect(() => {
    getLocation();
    console.log("ini location");
    console.log(location);
  }, []);

  const nextPage = () => {
    var newPage;
    newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  const prevPage = () => {
    var newPage;
    newPage = currentPage - 1;
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getLocation();
    console.log("ini location");
    console.log(location);
  }, [currentPage]);
  return (
    <div>
      <Navbar />
      {location.map((dummy, idx) => {
        return (
          <CardLocation id={dummy.id} name={dummy.name} type={dummy.type} />
        );
      })}
      <div className="loc__pagination">
        {currentPage === 1 ? (
          <div className=""></div>
        ) : (
          <button className="loc__prevpage" onClick={() => prevPage()}>
            Prev
          </button>
        )}
        <div className="loc_currentPages">{currentPage}</div>
        {currentPage === 7 ? (
          <div className=""></div>
        ) : (
          <button className="loc__nextpage" onClick={() => nextPage()}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ListLocation;
