import React from "react";

const FilterButtons = ({
  type,
  filterType,
  handleFilterGroup,
  typeButtonNames,
}) => {
  const classNameFilterType = (value) => {
    let className = "btn ";
    if (filterType === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterType = (e) => {
    handleFilterGroup(type, e.target.value);
  };

  return (
    <div>
      {typeButtonNames.map((buttonName) => (
        <button
          key={buttonName}
          value={buttonName}
          className={classNameFilterType(buttonName)}
          onClick={(e) => handleFilterType(e)}
        >
          {buttonName || "Show All"}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
