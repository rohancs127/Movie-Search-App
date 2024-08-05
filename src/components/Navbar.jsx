import React from "react";
import "../styles/navbar.css";
import { Search } from "lucide-react";
import { useState } from "react";

function Navbar({ getSearchedMovieAtApp }) {
  const [movie, setMovie] = useState("");
  const sendSearchedMovieToApp = (event) => {
    const searchMovie = event.target.value;
    setMovie(searchMovie);
    getSearchedMovieAtApp(searchMovie)
  };
  const handleSearchClick = () => {
    getSearchedMovieAtApp(movie);
    console.log(movie, " at navbar jsx");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <div className="navbar-div">
      <div id="navbar-logo">MuWee</div>
      <div id="searchbar-div">
        <div id="search-button-div">
          <button id="search-button" onClick={handleSearchClick}>
            <Search color="#b14b4b" />
          </button>
        </div>
        <div id="input-div">
          <input
            id="search-input"
            type="text"
            placeholder="Search a movie"
            value={movie}
            onChange={sendSearchedMovieToApp}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
