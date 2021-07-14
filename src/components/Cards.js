import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";

function Cards() {
    const [characters, setCharacters] = useState([]);

    const [filterStatus, setFilterStatus] = useState("");
    const [filterSpecies, setFilterSpecies] = useState("");
    const [filterGender, setFilterGender] = useState("");

    let apiURI = () => { 
        let link = "https://rickandmortyapi.com/api/character?";
        if( filterStatus) {
             link= link + "&status="+ filterStatus
        }
        if( filterSpecies) {
             link= link + "&species="+ filterSpecies
        }
        if( filterGender) {
             link= link + "&gender="+ filterGender
        }

        return link;
        }

    apiURI()

    useEffect(() => {
        axios
            .get(apiURI())
            .then((response) => response.data)
            .then((result) => setCharacters(result.results))
            .catch((error) => console.log("Card Axios", error));
    }, [filterStatus,filterSpecies,filterGender]);

    const handleFilter = () => {};

    const classNameFilterStatus = (value) => {
        let className = "cards-filters-button ";
        if (filterStatus === value) {
            className += "button-active";
        }
        return className;
    };
    const classNameFilterSpecies = (value) => {
        let className = "cards-filters-button ";
        if (filterSpecies === value) {
            className += "button-active";
        }
        return className;     
    };
    const classNameFilterGender = (value) => {
        let className = "cards-filters-button ";
        if (filterGender === value) {
            className += "button-active";
        }
        return className;
    };

    return (
        <div className="cards">
            <div className="cards-filters">
                <div className="cards-filters-buttons">
                    <LocalHospitalIcon
                        fontSize="large"
                        color="secondary"
                    />
                    <p>Status:</p>
                    <button
                        className={classNameFilterStatus("")}
                        onClick={() => setFilterStatus("")}
                    >
                        Show All
                    </button>
                    <button 
                        className={classNameFilterStatus("alive")}
                        onClick={() => setFilterStatus("alive")}>
                        Alive
                    </button>
                    <button 
                        className={classNameFilterStatus("dead")}
                        onClick={() => setFilterStatus("dead")}>
                        Dead
                    </button>
                    <button 
                        className={classNameFilterStatus("unknown")}
                        onClick={() => setFilterStatus("unknown")}>
                        Unknown
                    </button>
                </div>
                <div className="cards-filters-buttons">
                    <RedditIcon fontSize="large" color="secondary" />
                    <p>Species:</p>
                    <button 
                        className={classNameFilterSpecies("")}
                        onClick={() => setFilterSpecies("")}>
                        Show All
                    </button>
                    <button 
                        className={classNameFilterSpecies("human")}
                        onClick={() => setFilterSpecies("human")}>
                        Human
                    </button>
                    <button  
                        className={classNameFilterSpecies("alien")}
                        onClick={() => setFilterSpecies("alien")}>
                        Alien
                    </button>
                </div>
                <div className="cards-filters-buttons">
                    <WcIcon fontSize="large" color="secondary" />
                    <p>Gender:</p>
                    <button
                        className={classNameFilterGender("")}
                        onClick={() => setFilterGender("")}
                    >
                        Show All
                    </button>
                    <button
                        className={classNameFilterGender("male")}
                        onClick={() => setFilterGender("male")}
                    >
                        Male
                    </button>
                    <button
                        className={classNameFilterGender("female")}
                        onClick={() => setFilterGender("female")}

                    >
                        female
                    </button>
                    <button
                        className={classNameFilterGender("genderless")}
                        onClick={() => setFilterGender("genderless")}

                    >
                        Genderless
                    </button>
                    <button
                        className={classNameFilterGender("unknown")}
                        onClick={() => setFilterGender("unknown")}

                    >
                        Unknown
                    </button>
                </div>
            </div>
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
