import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/search/SearchBar";
import Upcoming from "./components/Upcoming/Upcoming";
import NowPlaying from "./components/NowPlaying/NowPlaying";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [movieData, setMovieData] = useState([]);

  const callBackFun = (value) => {
    setSearchKey(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      //api end point need to write it here
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDUwYzIzOWQwODg4ZmFiNGY3M2FmOGYwMTJiMjIwYSIsInN1YiI6IjYxODBjNGEyMzlhMWE2MDA0MzMzNDBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mj_3fnsRCN55HSm-ugmPxK93YKyCM4mf9sF7mNKPTs",
        },
      };

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
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SearchBar callBackFun={callBackFun} searchKey={searchKey} />
        {/* <MovieList movies={movieData} /> */}
        <Routes>
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/" element={<NowPlaying />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
