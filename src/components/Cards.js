import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "./Card";
import NotResult from "./NotResult";
import { getCharacters } from "../actions/index";

// Icons
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";

function Cards() {
  const characters = useSelector((state) => state.characters);
  const pages = useSelector((state) => state.pages);
  const [page, setPage] = useState(1);

  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterGender, setFilterGender] = useState("");

  //TODO create Async function

  useEffect(() => {
    setPage(1);
    getApi();
  }, [filterStatus, filterSpecies, filterGender]);

  useEffect(() => {
    getApi();
  }, [page]);

  const dispatch = useDispatch();

  function getApi() {
    dispatch(
      getCharacters(page, filterStatus, filterGender, filterSpecies)
    );
  }

  return (
    <div className="cards">
      <Filter
        setFilterStatus={setFilterStatus}
        setFilterSpecies={setFilterSpecies}
        setFilterGender={setFilterGender}
      />
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
              //   location={character.location.name}
            />
          ))}
        </div>
      ) : (
        <NotResult />
      )}
      <div className="btns pagination">
        {[...Array(pages).keys()].map((value) => (
          <button
            key={value}
            id={value + 1}
            className={`btn ${page === value + 1 ? "button-active" : ""}`}
            onClick={() => setPage(value + 1)}
          >
            {value + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cards;
