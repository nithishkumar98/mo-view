import React, { useEffect, useState, useParam } from "react";
import axios from "axios";
import MovieList from "../MovieList";
import SearchBar from "../search/SearchBar";
import NowPlaying from "../NowPlaying/NowPlaying";
import "./Home.css";
import BasicPagination from "../Pagination/Pagination";

function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [curPage, setCurPage] = useState(1);


  const callBackFun = (value) => {
    setSearchKey(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?query=${searchKey}&include_adult=false&language=en-US&page=${curPage}`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDUwYzIzOWQwODg4ZmFiNGY3M2FmOGYwMTJiMjIwYSIsInN1YiI6IjYxODBjNGEyMzlhMWE2MDA0MzMzNDBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mj_3fnsRCN55HSm-ugmPxK93YKyCM4mf9sF7mNKPTs",
        },
      };

      console.log("options.url");
      console.log(options.url);

      try {
        const response = await axios.request(options);
        setMovieData(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [searchKey, curPage]);

  const pagecallBackFun = (val) => {
    setCurPage(val);
  };

  return (
    <div className="home ">
      <SearchBar callBackFun={callBackFun} />
      {movieData.length > 0 ? (
        <>
          <MovieList movies={movieData} tag={"Searched Results..."} />{" "}
          <div className="flex justify-center my-10">
            <BasicPagination
              pagecallBackFun={pagecallBackFun}
              count={totalPages}
            />
          </div>
        </>
      ) : (
        <NowPlaying />
      )}
    </div>
  );
}
export default Home;
