import React from "react";
import "./Card.css";

//Button
import { Link } from "react-router-dom";
import IconStar from "./IconStar";
import IconFavorite from "./IconFavorite";
import IconFlash from "./IconFlash";

function Card({ id, status, character }) {
  let cardClassName;
  if (character.status === "Alive") {
    cardClassName = "card-alive";
  } else if (character.status === "Dead") {
    cardClassName = "card-dead";
  } else {
    cardClassName = "";
  }

  const cartContentInformations = [
    "name",
    "status",
    "species",
    "gender",
    "type",
    "location",
  ];

  const contentFirstLetterUpperCase = (information) => {
    return information.charAt(0).toUpperCase() + information.slice(1);
  };

  const contentInformationToPropsName = (information) => {
    if (information === "location") {
      return character[information].name;
    }
    return character[information];
  };

  return (
    <div className={`card ${cardClassName}`}>
      <Link to={`/detail/${id}`}>
        <div className="card-image-section">
          <img className="card-image" src={character.image} alt="avatar" />
        </div>
        <div className="card-content-section">
          {cartContentInformations.map(
            (information) =>
              contentInformationToPropsName(information) !== "" && (
                <p>
                  <span className="card-title">
                    {contentFirstLetterUpperCase(information)}:
                  </span>
                  {contentInformationToPropsName(information)}
                </p>
              )
          )}
        </div>
      </Link>
      <div className="card-buttons">
        <IconStar />
        <IconFavorite />
        <IconFlash />
      </div>
    </div>
  );
}

export default Card;
