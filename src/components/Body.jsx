import React from "react";
import "../styles/body.css";
import MovieCard from "./MovieCard";
import Pages from "./Pages";
import { useState, useEffect } from "react";
import { API_LINK } from "../scripts/apiLinks";
import { IMG_PATH } from "../scripts/apiLinks";
import { SEARCH_API } from "../scripts/apiLinks";

function Body({ getSearchedMovieAtBody }) {
  const movie = getSearchedMovieAtBody;
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch(url)
    //   .then((response) => {
    //     if (response.ok) return response.json();
    //     else throw new Error("Error in fetching data..");
    //   })
    //   .then((result) => {
    //     let newData = result.results;
    //     setData(newData)
    //     // console.log(data);
    //   });

    const fetchData = async () => {
      try {
        console.log(movie, "at Body jsx");
        const url = movie ? `${SEARCH_API + movie}` : API_LINK;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error in fetching data");
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [movie]);
  return (
    <div className="body-div">
      <div className="page-body">
        {data.map((item) => (
          <MovieCard
            key={item.id}
            movieId={item.id}
            movieImg={IMG_PATH + item.poster_path}
            movieTitle={item.title}
          />
        ))}
      </div>
      <div className="pages-div">
        <Pages />
      </div>
    </div>
  );
}

export default Body;
