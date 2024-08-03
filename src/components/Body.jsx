import React from "react";
import "../styles/body.css";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { API_LINK } from "../scripts/apiLinks";

const url = API_LINK;

function Body() {
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
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error in fetching data");
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="page-body">
      {data.map((item) => (
        <MovieCard key={item.id}
          movieId={item.id}
          movieImg={item.poster_path}
          movieTitle={item.title}
        />
      ))}
    </div>
  );
}

export default Body;
