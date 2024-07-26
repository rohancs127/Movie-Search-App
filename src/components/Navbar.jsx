import React from "react";
import "../styles/navbar.css";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar-div">
      <div id="navbar-logo">MuWee</div>
      <div id="searchbar-div">
        <div id="search-button-div">
          <button id="search-button">
            <Search color="#b14b4b" />
          </button>
        </div>
        <div id="input-div">
          <input id="search-input" type="text" placeholder="Search a movie" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
