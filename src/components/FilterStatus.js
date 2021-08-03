import React, { useState } from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const FilterStatus = () => {
  const [filterStatus, setFilterStatus] = useState("");

  const classNameFilterStatus = (value) => {
    let className = "btn ";
    if (filterStatus === value) {
      className += "button-active";
    }
    return className;
  };

  const handleFilterStatus = (e) => {
    setFilterStatus(e.target.value);
  };

  const statusButtonsNames = ["", "Alive", "Dead", "Unknown"];

  return (
    <div>
      {statusButtonsNames.map((statusName) => (
        <button
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
