import React from "react";
import "../styles/movieCard.css";

function MovieCard({ movieId, movieImg, movieTitle }) {
  return (
    <div>
      <div className="movie-card-div" key={movieId}>
        <img id="movie-image" src={movieImg} alt={movieTitle} />
        <h3 id="movie-title">{movieTitle}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
