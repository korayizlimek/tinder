import React, { useState } from "react";
import "./Cards.css";

// Icons
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import Characters from "../../components/Characters";

function Cards() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="cards">
      <Filter currentPage={currentPage} />
      <Characters />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Cards;
