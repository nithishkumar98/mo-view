import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/search/SearchBar";
import Upcoming from "./components/Upcoming/Upcoming";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <SearchBar callBackFun={callBackFun} searchKey={searchKey} /> */}
        {/* <MovieList movies={movieData} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/" element={<NowPlaying />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
