import React, { useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";
import NotResult from "./NotResult";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";

function Cards() {
    const [characters, setCharacters] = useState([]);

    const [filterStatus, setFilterStatus] = useState("");
    const [filterSpecies, setFilterSpecies] = useState("");
    const [filterGender, setFilterGender] = useState("");

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    //TODO create Async function

    useEffect(() => {
        getApi();
    }, [filterStatus, filterSpecies, filterGender, page]);

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

    // OR link
    // let apiURI = () => {
    //     let link = "https://rickandmortyapi.com/api/character?";
    // if( filterStatus) {
    //      link= link + "&status="+ filterStatus
    // }
    // if( filterSpecies) {
    //      link= link + "&species="+ filterSpecies
    // }
    // if( filterGender) {
    //      link= link + "&gender="+ filterGender
    // }
    // return link;
    // }

    // const handleFilter = () => {}; //TODO filter islemleri kendisini tekrar ediyor..

    const classNameFilterStatus = (value) => {
        let className = "btn ";
        if (filterStatus === value) {
            className += "button-active";
        }
        return className;
    };

    const classNameFilterSpecies = (value) => {
        let className = "btn ";
        if (filterSpecies === value) {
            className += "button-active";
        }
        return className;
    };
    const classNameFilterGender = (value) => {
        let className = "btn ";
        if (filterGender === value) {
            className += "button-active";
        }
        return className;
    };

    // const classNamePaginationButton = (value) => {
    //     let ClassName
    // }

    return (
        <div className="cards">
            <div className="cards-filters">
                <div className="btns">
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
                        onClick={() => setFilterStatus("alive")}
                    >
                        Alive
                    </button>
                    <button
                        className={classNameFilterStatus("dead")}
                        onClick={() => setFilterStatus("dead")}
                    >
                        Dead
                    </button>
                    <button
                        className={classNameFilterStatus("unknown")}
                        onClick={() => setFilterStatus("unknown")}
                    >
                        Unknown
                    </button>
                </div>
                <div className="btns">
                    <RedditIcon fontSize="large" color="secondary" />
                    <p>Species:</p>
                    <button
                        className={classNameFilterSpecies("")}
                        onClick={() => setFilterSpecies("")}
                    >
                        Show All
                    </button>
                    <button
                        className={classNameFilterSpecies("human")}
                        onClick={() => setFilterSpecies("human")}
                    >
                        Human
                    </button>
                    <button
                        className={classNameFilterSpecies("alien")}
                        onClick={() => setFilterSpecies("alien")}
                    >
                        Alien
                    </button>
                </div>
                <div className="btns">
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
                        Female
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
