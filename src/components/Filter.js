import React, { useState } from "react";
import "./Filter.css";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";

function Filter({
    setFilterStatus: setCardFilterStatus,
    setFilterSpecies: setCardFilterSpecies,
    setFilterGender: setCardFilterGender,
}) {
    const [filterStatus, setFilterStatus] = useState("");
    const [filterSpecies, setFilterSpecies] = useState("");
    const [filterGender, setFilterGender] = useState("");

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

    const handleFilterStatus = (e) => {
        setFilterStatus(e.target.value);
        setCardFilterStatus(e.target.value);
    };
    const handleFilterSpecies = (e) => {
        setFilterSpecies(e.target.value);
        setCardFilterSpecies(e.target.value);
    };
    const handleFilterGender = (e) => {
        setFilterGender(e.target.value);
        setCardFilterGender(e.target.value);
    };

    return (
        <div className="filter">
            <div className="cards-filters">
                <div className="btns">
                    <LocalHospitalIcon
                        fontSize="large"
                        color="secondary"
                    />
                    <p>Status:</p>
                    <button
                        value=""
                        className={classNameFilterStatus("")}
                        onClick={(e) => handleFilterStatus(e)}
                    >
                        Show All
                    </button>
                    <button
                        value="alive"
                        className={classNameFilterStatus("alive")}
                        onClick={(e) => handleFilterStatus(e)}
                    >
                        Alive
                    </button>
                    <button
                        value="dead"
                        className={classNameFilterStatus("dead")}
                        onClick={(e) => handleFilterStatus(e)}
                    >
                        Dead
                    </button>
                    <button
                        value="unknown"
                        className={classNameFilterStatus("unknown")}
                        onClick={(e) => handleFilterStatus(e)}
                    >
                        Unknown
                    </button>
                </div>
                <div className="btns">
                    <RedditIcon fontSize="large" color="secondary" />
                    <p>Species:</p>
                    <button
                        value=""
                        className={classNameFilterSpecies("")}
                        onClick={(e) => handleFilterSpecies(e)}
                    >
                        Show All
                    </button>
                    <button
                        value="human"
                        className={classNameFilterSpecies("human")}
                        onClick={(e) => handleFilterSpecies(e)}
                    >
                        Human
                    </button>
                    <button
                        value="alien"
                        className={classNameFilterSpecies("alien")}
                        onClick={(e) => handleFilterSpecies(e)}
                    >
                        Alien
                    </button>
                </div>
                <div className="btns">
                    <WcIcon fontSize="large" color="secondary" />
                    <p>Gender:</p>
                    <button
                        value=""
                        className={classNameFilterGender("")}
                        onClick={(e) => handleFilterGender(e)}
                    >
                        Show All
                    </button>
                    <button
                        value="male"
                        className={classNameFilterGender("male")}
                        onClick={(e) => handleFilterGender(e)}
                    >
                        Male
                    </button>
                    <button
                        value="female"
                        className={classNameFilterGender("female")}
                        onClick={(e) => handleFilterGender(e)}
                    >
                        Female
                    </button>
                    <button
                        value="genderless"
                        className={classNameFilterGender("genderless")}
                        onClick={(e) => handleFilterGender(e)}
                    >
                        Genderless
                    </button>
                    <button
                        value="unknown"
                        className={classNameFilterGender("unknown")}
                        onClick={(e) => handleFilterGender(e)}
                    >
                        Unknown
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
