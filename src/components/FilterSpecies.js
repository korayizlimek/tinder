import React, { useState } from "react";

const FilterSpecies = () => {
  const [filterSpecies, setFilterSpecies] = useState("");

  const classNameFilterSpecies = (value) => {
    let className = "btn ";
    if (filterSpecies === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterSpecies = (e) => {
    setFilterSpecies(e.target.value);
  };

  const speciesButtonsNames = ["", "Human", "Alien"];

  return (
    <div>
      {speciesButtonsNames.map((speciesName) => (
        <button
          value={speciesName}
          className={classNameFilterSpecies(speciesName)}
          onClick={(e) => handleFilterSpecies(e)}
        >
          {speciesName || "Show All"}
        </button>
      ))}
    </div>
  );
};

export default FilterSpecies;
