import React from "react";
import "../styles/moveInfo.css"
import { CircleX } from "lucide-react";

function MovieInfo({ movieDescription, releaseDate, imdb }) {
  return (
    <div className="movie-info">
      <h3>Description</h3>
      <p className="description">{movieDescription}</p>
      <h3>Release Date</h3>
      <p className="release-date">{releaseDate}</p>
      <h3>IMDB Rating</h3>
      <p className="imdb">{imdb}</p>
      <div className="close-btn"><CircleX /></div>
    </div>
  );
}

export default MovieInfo;
