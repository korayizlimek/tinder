import React from "react";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";
import FilterButtons from "./FilterButtons";

const statusButtonsNames = ["", "Alive", "Dead", "Unknown"];
const speciesButtonsNames = ["", "Human", "Alien"];
const genderButtonsNames = ["", "Male", "Female", "Genderless", "Unknown"];

function Filter({ filterGroup, handleFilterGroup }) {
  return (
    <div className="filter">
      <div className="cards-filters">
        <div className="btns">
          <LocalHospitalIcon fontSize="large" color="secondary" />
          <p>Status:</p>
          <FilterButtons
            type={"status"}
            filterType={filterGroup.status}
            handleFilterGroup={handleFilterGroup}
            typeButtonNames={statusButtonsNames}
          />
        </div>
        <div className="btns">
          <RedditIcon fontSize="large" color="secondary" />
          <p>Species:</p>
          <FilterButtons
            type={"species"}
            filterType={filterGroup.species}
            handleFilterGroup={handleFilterGroup}
            typeButtonNames={speciesButtonsNames}
          />
        </div>
        <div className="btns">
          <WcIcon fontSize="large" color="secondary" />
          <p>Gender:</p>
          <FilterButtons
            type={"gender"}
            filterType={filterGroup.gender}
            handleFilterGroup={handleFilterGroup}
            typeButtonNames={genderButtonsNames}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
