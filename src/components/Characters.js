import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import NotResult from "./NotResult";

const Characters = () => {
  const characters = useSelector((state) => state.characters);
  console.log(characters)
  return (
    <div>
      {characters ? (
        <div className="characters">
        {characters.map((character) => <Card character={character} /> )}
        </div>  
      ) : (
        <NotResult />
      )}
    </div>
  );
};

export default Characters;
