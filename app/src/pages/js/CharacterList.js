import "../css/CharacterList.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/js/Navbar";
import { GetAllCharacters } from "../../api/Info.js";
import CardCharacters from "../../components/js/CardCharacters";

function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const getCharacters = async () => {
    const response = await GetAllCharacters(currentPage);
    setCharacter(response);
  };

  useEffect(() => {
    getCharacters();
    console.log(character);
    console.log("ini characters");
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
    getCharacters();
    console.log(character);
    console.log("ini characters");
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      {character.map((dummy, idx) => {
        return (
          <CardCharacters
            id={dummy.id}
            image={dummy.image}
            name={dummy.name}
            status={dummy.status}
          />
        );
      })}
      <div className="char__pagination">
        {currentPage === 1 ? (
          <div className=""></div>
        ) : (
          <button className="char__prevpage" onClick={() => prevPage()}>
            Prev
          </button>
        )}
        <div className="char_currentPages">{currentPage}</div>
        {currentPage === 42 ? (
          <div className=""></div>
        ) : (
          <button className="char__nextpage" onClick={() => nextPage()}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default CharacterList;
