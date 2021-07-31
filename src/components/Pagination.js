import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ currentPage, setCurrentPage }) => {
  const pagesNumbers = useSelector((state) => state.pages);
  return (
    <div className="btns pagination">
      {[...Array(pagesNumbers).keys()].map((value) => (
        <button
          key={value}
          id={value + 1}
          className={`btn ${
            currentPage === value + 1 ? "button-active" : ""
          }`}
          onClick={() => {
            setCurrentPage(value + 1);
          }}
        >
          {value + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
