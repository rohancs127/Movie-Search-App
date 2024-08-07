import React from "react";
import "../styles/pages.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function Pages({ getPageNumber }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 500;

  const setToPreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      getPageNumber(newPage);
    }
  };

  const setToNextPage = () => {
    if (currentPage < pageLimit) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      getPageNumber(newPage);
    }
  };

  const setPage = (pageNo) => {
    setCurrentPage(pageNo);
    getPageNumber(pageNo);
  };

  return (
    <div className="page-div">
      <div className="page-div-element" onClick={() => setPage(1)}>
        1
      </div>
      <div className="page-div-element">
        <ChevronLeft onClick={setToPreviousPage} />
      </div>
      <div className="page-div-element" id="current-page">
        {currentPage}
      </div>
      <div className="page-div-element">
        <ChevronRight onClick={setToNextPage} />
      </div>
      <div className="page-div-element" onClick={() => setPage(pageLimit)}>
        {pageLimit}
      </div>
    </div>
  );
}

export default Pages;
