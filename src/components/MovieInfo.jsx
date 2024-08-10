import React from "react";
import "../styles/moveInfo.css";
import { CircleX } from "lucide-react";

function MovieInfo({ movieDescription, releaseDate, imdb, onClose }) {
  return (
    <div className="movie-info">
      <h3>Description</h3>
      <p className="description">{movieDescription}</p>
      <p className="release-date">Release date: {releaseDate}</p>
      <p className="imdb">IMDB rating: {(imdb.toFixed(2))}</p>
      <div className="close-btn">
        <CircleX color="#36162e" size={"30px"} strokeWidth={"2px"} onClick={onClose}/>
      </div>
    </div>
  );
}

export default MovieInfo;
