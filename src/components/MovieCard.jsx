import React from "react";
import "../styles/movieCard.css";

const API_LINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23fac7a4c712bd0b79f8bf320213960a&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=23fac7a4c712bd0b79f8bf320213960a&query=";

function MovieCard() {
  return (
    <div className="movie-card-div">
      <img id="movie-image" src="../../src/assets/images/Harry_Potter_and_the_Prisoner_of_Azkaban_poster.webp" />
      <h3 id="movie-title">Harry Potter and the Prisoner of Azkaban</h3>
    </div>
  );
}

export default MovieCard;
