import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";
import NotResult from "./NotResult";

// Icons
import Filter from "./Filter";

function Cards() {
    const [characters, setCharacters] = useState([]);

    const [filterStatus, setFilterStatus] = useState("");
    const [filterSpecies, setFilterSpecies] = useState("");
    const [filterGender, setFilterGender] = useState("");

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    //TODO create Async function

    useEffect(() => {
        setPage(1);
        getApi();
    }, [filterStatus, filterSpecies, filterGender]);

    useEffect(() => {
        getApi();
    }, [page]);

    function getApi() {
        axios
            .get(
                `https://rickandmortyapi.com/api/character?page=${page}&status=${filterStatus}&gender=${filterGender}&species=${filterSpecies}`
            )
            .then((response) => response.data)
            .then((result) => {
                setCharacters(result.results);
                setPages(result.info.pages);
            })
            .catch((error) => {
                setCharacters("");
                setPages(0);
            });
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
                            location={character.location.name}
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
                        className={`btn ${
                            page === value + 1 ? "button-active" : ""
                        }`}
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
