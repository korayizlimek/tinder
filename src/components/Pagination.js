import { useSelector } from "react-redux";

const Pagination = ({ currentPage, changeCurrentPage }) => {
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
            changeCurrentPage(value + 1);
          }}
        >
          {value + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
