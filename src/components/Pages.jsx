import React from "react";
import '../styles/pages.css'
import { ChevronLeft, ChevronRight } from "lucide-react";
function Pages() {
  const pageLimit = 500;
  return (
    <div className="page-div">
      <div>1</div>
      <div>
        <ChevronLeft />
      </div>
      <div>
        <ChevronRight />
      </div>
      <div></div>
      <div>{pageLimit}</div>
    </div>
  );
}

export default Pages;
