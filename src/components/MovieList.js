import React from "react";
import Card from "./Card/Card";
import "./MovieList.css";

const MovieList = (props) => {
  // console.log("props.movies");
  // console.log(props.movies);
  const baseURL = "https://www.themoviedb.org";
  return (
    <>
      <div class="mt-0 sm:mt-5  px-0 sm:px-20 flex  w-full">
        <div class="movie-list px-0 sm:px-48 w-full justify-center flex flex-wrap">
          <h2 className="">{props.tag}</h2>
        </div>
      </div>

      <div class="mt-0 sm:mt-5  px-0 sm:px-20 flex justify-center w-full">
        <div class="movie-list  px-0 sm:px-20 w-full justify-center flex flex-wrap">
          {props.movies.map((movie, index) => (
            <Card
              key={index} // Don't forget to add a key prop when using map
              title={movie.title}
              data={movie}
              baseURL={baseURL}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
