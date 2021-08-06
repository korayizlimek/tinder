import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Episode from "../../components/Episode";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetails } from "../../redux/actions";
import IconStar from "../../components/IconStar";
import IconFavorite from "../../components/IconFavorite";
import IconFlash from "../../components/IconFlash";

function CardDetail() {
  const id = useParams().character;

  const character = useSelector((state) => state.characterDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterDetails(id));
  }, []);

  const lastEpisodes = (character) => {
    const lastFiveEpisodes = character.episode?.reverse().slice(0, 5);
    return lastFiveEpisodes;
  };

  return (
    <div className="cardDetail">
      <div className="cardDetail-image-section">
        <img
          className="cardDetail-image"
          src={character.image}
          alt="CharacterDetailImage"
        />
      </div>
      <div className="cardDetail-descriptions-container">
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Status :</p>
          <p className="cardDetail-description-value">
            {character.status}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Species :</p>
          <p className="cardDetail-description-value">
            {character.species}
          </p>
        </div>
        {character.type && (
          <div className="cardDetail-description">
            <p className="cardDetail-description-title">Type :</p>
            <p className="cardDetail-description-value">
              {character.type}
            </p>
          </div>
        )}

        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Gender :</p>
          <p className="cardDetail-description-value">
            {character.gender}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Location :</p>
          <p className="cardDetail-description-value">
            {character.location?.name}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Origin :</p>
          <p className="cardDetail-description-value">
            {character.origin?.name}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Episodes :</p>
          <p className="cardDetail-description-value">
            {lastEpisodes(character)?.map((episode) => (
              <Episode episode={episode} />
            ))}
          </p>
        </div>
      </div>
      <div className="cardDetail-buttons">
        <IconStar />
        <IconFavorite />
        <IconFlash />
      </div>
    </div>
  );
}

export default CardDetail;
