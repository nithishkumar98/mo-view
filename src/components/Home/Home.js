import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../MovieList";
import SearchBar from "../search/SearchBar";
import NowPlaying from "../NowPlaying/NowPlaying";

function Home() {
    const [searchKey,setSearchKey] = useState('')
  const [movieData, setMovieData] = useState([]);

    const callBackFun = (value) => {
      setSearchKey(value);
    }

  useEffect(() => {
    const fetchData = async () => {
      //api end point need to write it here
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?query=${searchKey}&include_adult=false&language=en-US&page=1`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDUwYzIzOWQwODg4ZmFiNGY3M2FmOGYwMTJiMjIwYSIsInN1YiI6IjYxODBjNGEyMzlhMWE2MDA0MzMzNDBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mj_3fnsRCN55HSm-ugmPxK93YKyCM4mf9sF7mNKPTs",
        },
      };

      console.log('options.url')
      console.log(options.url)

      try {
        const response = await axios.request(options);
        setMovieData(response.data.results);
        console.log("response.data.results");
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Immediately invoke the async function
  }, [searchKey]);
  return (
    <div className="">
      <SearchBar  callBackFun={callBackFun} />
      <MovieList movies={movieData} tag={'Searched Results...'} />
      <NowPlaying />
    </div>
  );
}
export default Home;
