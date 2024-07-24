import React from "react";
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar-div">
      <div id="navbar-logo">MuWee</div>
      <div id="searchbar-div">
        <div id="search-button-div">
          <button id="search-button">Search</button>
        </div>
        <div id="input-div">
          <input type="text" placeholder="Search a movie" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
