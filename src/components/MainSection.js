import React, { useState } from "react";
// import "./Cards.css";

// Icons
import Filter from "./Filter";
import Pagination from "./Pagination";
import Characters from "./Characters";

function MainSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const changeCurrentPage = (newCurrentPage) => {
    setCurrentPage(newCurrentPage);
  };

  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    const resetCurrentPage = 1;
    refreshCharacters(
      resetCurrentPage,
      filterStatus,
      filterSpecies,
      filterGender
    );
    changeCurrentPage(resetCurrentPage);
  }, [filterStatus, filterSpecies, filterGender]);

  useEffect(() => {
    refreshCharacters(currentPage);
  }, [currentPage]);

  const refreshCharacters = (
    currentPage,
    filterStatus,
    filterGender,
    filterSpecies
  ) => {
    dispatch(
      getCharacters(currentPage, filterStatus, filterGender, filterSpecies)
    );
  };

  return (
    <section className="mainSection">
      <Filter
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
      <Characters />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </section>
  );
}

export default MainSection;
