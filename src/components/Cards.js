import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";

function Cards() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((response) => response.data)
            .then((result) => setCharacters(result.results))
            .catch((error) => console.log("Card Axios", error));
    }, []);

    return (
        <div>
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
        </div>
    );
}

export default Cards;
