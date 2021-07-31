import React, { useState } from "react";
import "./Cards.css";
import Card from "../../components/Card";
import { NotResult } from "..";

// Icons
import Filter from "../../components/Filter";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";

function Cards() {
  const characters = useSelector((state) => state.characters);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="cards">
      <Filter currentPage={currentPage} />

      {characters ? (
        <div className="cards-container">
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              avatarUrl={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              type={character.type}
              location={character.location.name}
            />
          ))}
        </div>
      ) : (
        <NotResult />
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Cards;
