import React, { useEffect, useState } from "react";
import { getCharacters } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

// Icons
import Filter from "./Filter";
import Pagination from "./Pagination";
import Characters from "./Characters";

function MainSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterGroup, setFilterGroup] = useState({
    status: "",
    species: "",
    gender: "",
  });

  useEffect(() => {
    const resetCurrentPage = 1;
    changeCurrentPage(resetCurrentPage);
    refreshCharacters();
  }, [filterGroup.status, filterGroup.species, filterGroup.gender]);

  useEffect(() => {
    refreshCharacters();
  }, [currentPage]);

  const changeCurrentPage = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  const dispatch = useDispatch();

  const refreshCharacters = () => {
    dispatch(
      getCharacters(
        currentPage,
        filterGroup.status,
        filterGroup.species,
        filterGroup.gender
      )
    );
  };

  const handleFilterGroup = (key, value) => {
    if (key === "status") {
      setFilterGroup({ ...filterGroup, status: value });
    }
    if (key === "species") {
      setFilterGroup({ ...filterGroup, species: value });
    }
    if (key === "gender") {
      setFilterGroup({ ...filterGroup, gender: value });
    }
  };

  const characters = useSelector((state) => state.characters);

  return (
    <section className="mainSection">
      <Filter
        filterGroup={filterGroup}
        handleFilterGroup={handleFilterGroup}
      />
      <Characters />
      <Pagination
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </section>
  );
}

export default MainSection;
