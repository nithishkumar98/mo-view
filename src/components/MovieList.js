import React from "react";
import Card from "./Card/Card";
import './MovieList.css'


const MovieList = (props) => {
  console.log("props.movies");
  console.log(props.movies);
  const baseURL = "https://www.themoviedb.org";
  return (
    <div>
      <div class=" mt-10  px-10 sm:px-20 flex justify-center w-full">
      <div class="movie-list mt-10 px-10 sm:px-20 w-full justify-center flex flex-wrap">
        {props.movies.map((movie, index) => (
          <Card
            key={index} // Don't forget to add a key prop when using map
            title={movie.title}
            baseURL={baseURL}
            poster={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
