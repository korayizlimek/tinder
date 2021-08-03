import React, { useEffect, useState } from "react";
import "./Filter.css";

// Icons
import WcIcon from "@material-ui/icons/Wc";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import RedditIcon from "@material-ui/icons/Reddit";
import { useDispatch } from "react-redux";
import { getCharacters } from "../redux/actions";
import FilterStatus from "./FilterStatus";
import FilterSpecies from "./FilterSpecies";
import FilterGender from "./FilterGender";

function Filter({ currentPage, changeCurrentPage }) {
  //filterGroup
  // const [filterStatus, setFilterStatus] = useState("");
  // const [filterSpecies, setFilterSpecies] = useState("");
  // const [filterGender, setFilterGender] = useState("");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const resetCurrentPage = 1;
  //   refreshCharacters(
  //     resetCurrentPage,
  //     filterStatus,
  //     filterSpecies,
  //     filterGender
  //   );
  //   changeCurrentPage(resetCurrentPage);
  // }, [filterStatus, filterSpecies, filterGender]);

  // useEffect(() => {
  //   refreshCharacters(currentPage);
  // }, [currentPage]);

  // const refreshCharacters = (
  //   currentPage,
  //   filterStatus,
  //   filterGender,
  //   filterSpecies
  // ) => {
  //   dispatch(
  //     getCharacters(currentPage, filterStatus, filterGender, filterSpecies)
  //   );
  // };

  return (
    <div className="filter">
      <div className="cards-filters">
        <div className="btns">
          <LocalHospitalIcon fontSize="large" color="secondary" />
          <p>Status:</p>
          <FilterStatus />
        </div>
        <div className="btns">
          <RedditIcon fontSize="large" color="secondary" />
          <p>Species:</p>
          <FilterSpecies />
        </div>
        <div className="btns">
          <WcIcon fontSize="large" color="secondary" />
          <p>Gender:</p>
          <FilterGender />
        </div>
      </div>
    </div>
  );
}

export default Filter;
