import React from "react";
import Card from "./Card/Card";

const MovieList = (props) => {
  console.log("props.movies");
  console.log(props.movies);
  const baseURL = "https://www.themoviedb.org";
  return (
    <div>
      <div class="mt-20 flex flex-wrap m-20">
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
  );
};

export default MovieList;
