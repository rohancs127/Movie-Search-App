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
  const handleInfoClick = () => {
    setMovieInfoToVisibleState(true);
  };
  const handleCloseClick = ()=>{
    setMovieInfoToVisibleState(false);
  }
  return (
    <div>
      <div className="movie-card-div" key={movieId}>
        <img id="movie-image" src={movieImg} alt={movieTitle} />
        <h3 id="movie-title">{movieTitle}</h3>
        <div className="info-btn">
          {!movieInfoToVisibleState && (
            <Info
              color="#36162e"
              size={"30px"}
              strokeWidth={"2px"}
              onClick={handleInfoClick}
            />
          )}
        </div>
        {(movieInfoToVisibleState) && (
          <div className="movie-info">
            <MovieInfo
              movieDescription={movieDescription}
              releaseDate={releaseDate}
              imdb={imdb}
              onClose={handleCloseClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
