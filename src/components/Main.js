import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.popularRequest);
        setMovies(response.data.results[Math.floor(Math.random() * 20)]);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="w-full h-[550px]">
      <div className="absolute w-full h-[550px] bg-gradient-to-br from-black"></div>
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          alt="Popular Movies Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute p-5 w-full top-60 text-white">
        <h1 className="text-4xl font-bold mb-1 mx-2 font-serif">
          {movies.original_title}
        </h1>
        <p className="mx-5 mb-4 text-gray-200 ">
          IMDb : {movies.vote_average}&#40;{movies.vote_count}&#41;
        </p>
        <p className="mx-5 mb-4 text-gray-200 w-1/2">{movies.overview}</p>
        <div>
          <button className="px-6 py-2 mx-2 bg-gray-300 rounded-sm font-semibold border-2 border-gray-300 text-black">
            Play
          </button>
          <button className="px-6 py-2 mx-2 text-white rounded-sm font-semibold border-2 border-gray-300">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
