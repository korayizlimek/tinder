import React, { useEffect, useState } from "react";
import "./Filter.css";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";
import { useDispatch } from "react-redux";
import { getCharacters } from "../redux/actions";

function Filter({ currentPage }) {
  //filterGroup
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterGender, setFilterGender] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const resetCurrentPage = 1;
    dispatch(
      getCharacters(
        resetCurrentPage,
        filterStatus,
        filterGender,
        filterSpecies
      )
    );
  }, [filterStatus, filterSpecies, filterGender]);

  useEffect(() => {
    console.log("new", currentPage);
    dispatch(
      getCharacters(currentPage, filterStatus, filterGender, filterSpecies)
    );
  }, [currentPage]);

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
  };
  const handleFilterSpecies = (e) => {
    setFilterSpecies(e.target.value);
  };
  const handleFilterGender = (e) => {
    setFilterGender(e.target.value);
  };

  const statusButtonsNames = ["", "Alive", "Dead", "Unknown"];
  const speciesButtonsNames = ["", "Human", "Alien"];
  const genderButtonsNames = [
    "",
    "Male",
    "Female",
    "Genderless",
    "Unknown",
  ];

  return (
    <div className="filter">
      <div className="cards-filters">
        <div className="btns">
          <LocalHospitalIcon fontSize="large" color="secondary" />
          <p>Status:</p>
          {statusButtonsNames.map((element) => (
            <button
              value={element}
              className={classNameFilterStatus(element)}
              onClick={(e) => handleFilterStatus(e)}
            >
              {element || "Show All"}
            </button>
          ))}
        </div>
        <div className="btns">
          <RedditIcon fontSize="large" color="secondary" />
          <p>Species:</p>
          {speciesButtonsNames.map((element) => (
            <button
              value={element}
              className={classNameFilterSpecies(element)}
              onClick={(e) => handleFilterSpecies(e)}
            >
              {element || "Show All"}
            </button>
          ))}
        </div>
        <div className="btns">
          <WcIcon fontSize="large" color="secondary" />
          <p>Gender:</p>
          {genderButtonsNames.map((element) => (
            <button
              value={element}
              className={classNameFilterGender(element)}
              onClick={(e) => handleFilterGender(e)}
            >
              {element || "Show All"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
