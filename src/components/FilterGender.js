import React from "react";

const FilterGender = ({ filterGender, handleFilterGroup }) => {
  const classNameFilterGender = (value) => {
    let className = "btn ";
    if (filterGender === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterGender = (e) => {
    handleFilterGroup("gender", e.target.value);
  };

  const genderButtonsNames = [
    "",
    "Male",
    "Female",
    "Genderless",
    "Unknown",
  ];
  return (
    <div>
      {genderButtonsNames.map((genderName) => (
        <button
          key={genderName}
          value={genderName}
          className={classNameFilterGender(genderName)}
          onClick={(e) => handleFilterGender(e)}
        >
          {genderName || "Show All"}
        </button>
      ))}
    </div>
  );
};

export default FilterGender;
