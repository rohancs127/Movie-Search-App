import React from "react";
import "../styles/movieCard.css";

function MovieCard() {
  return (
    <div className="movie-card-div">
      <img id="movie-image" src="../../src/assets/images/Harry_Potter_and_the_Prisoner_of_Azkaban_poster.webp" />
      <h3 id="movie-title">Movie title</h3>
    </div>
  );
}

export default MovieCard;
