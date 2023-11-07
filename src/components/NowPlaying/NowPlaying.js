import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../MovieList";
import BasicPagination from "../Pagination/Pagination";

function NowPlaying() {
  //   const [searchKey,setSearchKey] = useState('')
  const [movieData, setMovieData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //   const callBackFun = (value) => {
  //     setSearchKey(value);
  //   }

  useEffect(() => {
    const fetchData = async () => {
      //api end point need to write it here
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${curPage}`,
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
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Immediately invoke the async function
    window.scrollTo(0, 0);
  }, [curPage]);

  const pagecallBackFun = (val) => {
    setCurPage(val);
  };

  return (
    <div className="mt-28">
      <MovieList movies={movieData} tag={"Now playing"} />
      <div className="flex justify-center my-10">
        <BasicPagination pagecallBackFun={pagecallBackFun} count={totalPages} />
      </div>
    </div>
  );
}
export default NowPlaying;
