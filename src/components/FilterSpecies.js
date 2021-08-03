import React from "react";

const FilterSpecies = ({ filterSpecies, handleFilterGroup }) => {
  const classNameFilterSpecies = (value) => {
    let className = "btn ";
    if (filterSpecies === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterSpecies = (e) => {
    handleFilterGroup("species", e.target.value);
  };

  const speciesButtonsNames = ["", "Human", "Alien"];

  return (
    <div>
      {speciesButtonsNames.map((speciesName) => (
        <button
          key={speciesName}
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
