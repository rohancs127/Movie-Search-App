import React from "react";
import "../styles/movieCard.css";
import { API_LINK } from "../scripts/apiLinks";

const url = API_LINK;

function MovieCard() {
  return (
    <div className="movie-card-div">
      <img
        id="movie-image"
        src="../../src/assets/images/Harry_Potter_and_the_Prisoner_of_Azkaban_poster.webp"
      />
      <h3 id="movie-title">Harry Potter and the Prisoner of Azkaban</h3>
    </div>
  );
}

export default MovieCard;
