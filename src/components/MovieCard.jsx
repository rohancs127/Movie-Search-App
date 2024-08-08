import React from "react";
import "../styles/movieCard.css";
import { Info } from "lucide-react";

function MovieCard({ movieId, movieImg, movieTitle, movieDescription, releaseDate, imdb }) {
  return (
    <div>
      <div className="movie-card-div" key={movieId}>
        <img id="movie-image" src={movieImg} alt={movieTitle} />
        <h3 id="movie-title">{movieTitle}</h3>
        <div id="movie-description"><Info color="#fff" size={"30px"} strokeWidth={"3px"}/></div>
      </div>
    </div>
  );
}

export default MovieCard;
