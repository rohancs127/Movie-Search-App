import React from "react";
import "../styles/movieCard.css";
import { Info } from "lucide-react";
import MovieInfo from "./MovieInfo";
import { useState } from "react";

function MovieCard({
  movieId,
  movieImg,
  movieTitle,
  movieDescription,
  releaseDate,
  imdb,
}) {
  const [movieInfoToVisibleState, setMovieInfoToVisibleState] = useState(false);
  const handleClick = () => {
    setMovieInfoToVisibleState(true);
  };
  return (
    <div>
      <div className="movie-card-div" key={movieId}>
        <img id="movie-image" src={movieImg} alt={movieTitle} />
        <h3 id="movie-title">{movieTitle}</h3>
        <div id="movie-description">
          {!movieInfoToVisibleState && (
            <Info
              color="#fff"
              size={"30px"}
              strokeWidth={"3px"}
              onClick={handleClick}
            />
          )}
        </div>

        <div className="movie-info">
          {movieInfoToVisibleState && (
            <MovieInfo
              movieDescription={movieDescription}
              releaseDate={releaseDate}
              imdb={imdb}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
