// import React from "react";

// const FilterSpecies = ({ filterSpecies, handleFilterGroup }) => {
//   const classNameFilterSpecies = (value) => {
//     let className = "btn ";
//     if (filterSpecies === value) {
//       className += "button-active";
//     }
//     return className;
//   };

//   const handleFilterSpecies = (e) => {
//     handleFilterGroup("species", e.target.value);
//   };

//   const speciesButtonsNames = ["", "Human", "Alien"];

//   return (
//     <div>
//       {speciesButtonsNames.map((speciesName) => (
//         <button
//           key={speciesName}
//           value={speciesName}
//           className={classNameFilterSpecies(speciesName)}
//           onClick={(e) => handleFilterSpecies(e)}
//         >
//           {speciesName || "Show All"}
//         </button>
//       ))}
//     </div>
//   );
// };
import React from "react";

const FilterSpecies = ({
  type,
  filterType,
  handleFilterGroup,
  speciesButtonsNames,
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
      {speciesButtonsNames.map((speciesName) => (
        <button
          key={speciesName}
          value={speciesName}
          className={classNameFilterType(speciesName)}
          onClick={(e) => handleFilterType(e)}
        >
          {speciesName || "Show All"}
        </button>
      ))}
    </div>
  );
};

export default FilterSpecies;
