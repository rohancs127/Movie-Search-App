import React from "react";
import "../styles/movieCard.css";
import { useState, useEffect } from "react";
import { API_LINK } from "../scripts/apiLinks";

const url = API_LINK;

function MovieCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Error in fetching data..");
      })
      .then((result) => {
        let newData = result.results;
        setData(newData)
        // console.log(data);
      });
  }, []);

  return (
    <div>
      {
      // console.log(data)
      data.map((item) => (
        <div className="movie-card-div" key={item.id}>
          <img
            id="movie-image"
            src={item.poster_path}
          />
          <h3 id="movie-title">{item.title}</h3>
        </div>
      ))
      }
    </div>
  );
}

export default MovieCard;
