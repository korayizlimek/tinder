import React from "react";

const FilterStatus = ({ filterStatus, handleFilterGroup }) => {
  const classNameFilterStatus = (value) => {
    let className = "btn ";
    if (filterStatus === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterStatus = (e) => {
    handleFilterGroup("status", e.target.value);
  };

  const statusButtonsNames = ["", "Alive", "Dead", "Unknown"];

  return (
    <div>
      {statusButtonsNames.map((statusName) => (
        <button
          name={statusName}
          value={statusName}
          className={classNameFilterStatus(statusName)}
          onClick={(e) => handleFilterStatus(e)}
        >
          {statusName || "Show All"}
        </button>
      ))}
    </div>
  );
};

export default FilterStatus;
