import React, { useState } from "react";

const FilterGender = () => {
  const [filterGender, setFilterGender] = useState("");

  const classNameFilterGender = (value) => {
    let className = "btn ";
    if (filterGender === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterGender = (e) => {
    setFilterGender(e.target.value);
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
