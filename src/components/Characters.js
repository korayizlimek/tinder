import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Characters = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <div className="characters">
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </div>
  );
};

export default Characters;
