import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Characters = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className="characters">
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
  );
};

export default Characters;
