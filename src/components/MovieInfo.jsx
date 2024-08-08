import React from "react";
import "../styles/moveInfo.css"

function MovieInfo({ movieDescription, releaseDate, imdb }) {
  return (
    <div className="movie-info">
      <p className="description">{movieDescription}</p>
      <h3 className="release-date">{releaseDate}</h3>
      <h3 className="imdb">{imdb}</h3>
    </div>
  );
}

export default MovieInfo;
