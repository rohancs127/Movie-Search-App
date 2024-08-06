import React from "react";
import "../styles/pages.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Pages() {
  const pageLimit = 500;
  return (
    <div className="page-div">
      <div className="page-div-element">1</div>
      <div className="page-div-element">
        <ChevronLeft />
      </div>
      <div className="page-div-element" id="current-page"></div>
      <div className="page-div-element">
        <ChevronRight />
      </div>
      <div className="page-div-element">{pageLimit}</div>
    </div>
  );
}

export default Pages;
