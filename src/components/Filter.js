import React from "react";
import "./Filter.css";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";
import FilterStatus from "./FilterStatus";
import FilterSpecies from "./FilterSpecies";
import FilterGender from "./FilterGender";

function Filter({ filterGroup, handleFilterGroup }) {
  return (
    <div className="filter">
      <div className="cards-filters">
        <div className="btns">
          <LocalHospitalIcon fontSize="large" color="secondary" />
          <p>Status:</p>
          <FilterStatus
            filterStatus={filterGroup.status}
            handleFilterGroup={handleFilterGroup}
          />
        </div>
        <div className="btns">
          <RedditIcon fontSize="large" color="secondary" />
          <p>Species:</p>
          <FilterSpecies
            filterSpecies={filterGroup.species}
            handleFilterGroup={handleFilterGroup}
          />
        </div>
        <div className="btns">
          <WcIcon fontSize="large" color="secondary" />
          <p>Gender:</p>
          <FilterGender
            filterGender={filterGroup.gender}
            handleFilterGroup={handleFilterGroup}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
