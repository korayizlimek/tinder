import React, { useState } from "react";
import "./Card.css";

// Icons
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

//Button
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Card({
  id,
  avatarUrl,
  name,
  status,
  species,
  gender,
  type,
  location,
}) {
  const [favorite, setFavorite] = useState(false);
  const [star, setStar] = useState(false);
  const [flash, setFlash] = useState(false);

  let cardClassName;
  if (status === "Alive") {
    cardClassName = "card-alive";
  } else if (status === "Dead") {
    cardClassName = "card-dead";
  } else {
    cardClassName = "";
  }

  const cartContentInformations = ["name", "status"];

  const contentFirstLetterUpperCase = (information) => {
    return information.charAt(0).toUpperCase() + information.slice(1);
  };

  const contentInformationToPropsName = (information) => {
    return information;
  };

  return (
    <div className={`card ${cardClassName}`}>
      <Link to={`/detail/${id}`}>
        <div className="card-image-section">
          <img className="card-image" src={avatarUrl} alt="avatar" />
        </div>
        <div className="card-content-section"></div>
        {name !== "" && (
          <p>
            <span className="card-title">Name:</span> {name}
          </p>
        )}
        //! burasi cok onemli
        {cartContentInformations.map(
          (information) =>
            information !== "" && (
              <p>
                <span className="card-title">
                  {contentFirstLetterUpperCase(information)}:
                </span>
                {contentInformationToPropsName(information)}
              </p>
            )
        )}
        {/* 
        {status !== "" && (
          <p>
            <span className="card-title">Status:</span> {status}
          </p>
        )}
        {species !== "" && (
          <p>
            <span className="card-title">Species:</span> {species}{" "}
          </p>
        )}
        {gender !== "" && (
          <p>
            <span className="card-title">Gender:</span> {gender}
          </p>
        )}
        {type !== "" && (
          <p>
            <span className="card-title">Type:</span> {type}{" "}
          </p>
        )}
        {location !== "" && (
          <p>
            <span className="card-title">Location:</span> {location}{" "}
          </p>
        )} */}
      </Link>
      <div className="card-buttons">
        <IconButton onClick={() => setStar(!star)}>
          <StarRateIcon
            className={`card-button-icon ${
              star ? "card-button-icon-active" : ""
            }`}
          />
        </IconButton>
        <IconButton onClick={() => setFavorite(!favorite)}>
          <FavoriteIcon
            className={`card-button-icon ${
              favorite ? "card-button-icon-active" : ""
            }`}
          />
        </IconButton>
        <IconButton onClick={() => setFlash(!flash)}>
          <FlashOnIcon
            className={`card-button-icon ${
              flash ? "card-button-icon-active" : ""
            }`}
          />
        </IconButton>
      </div>
    </div>
  );
  // Karaktere tıklandığı router ile yeni bir sayfa açılsın ve karakter kartındaki bilgilerin aynısı ve son oynadığı 5 bölümün adlarını görüntüleyebilelim.
}

export default Card;
