import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const sendSearchedMovieToBody = (movie) => {
    setSearchedMovie(movie);
    console.log(movie, "at App jsx");
  };
  return (
    <div>
      <Navbar getSearchedMovieAtApp={sendSearchedMovieToBody} />
      <Body getSearchedMovieAtBody={searchedMovie} />
    </div>
  );
}

export default App;
