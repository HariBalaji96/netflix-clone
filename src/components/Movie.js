import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="relative h-full inline-block w-[140px] mx-2">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
        className="rounded-md shadow-2xl"
      />
      <div className="top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white absolute cursor-pointer">
        <span className="flex m-2">{like ? <FaHeart /> : <FaRegHeart />}</span>
        <p className="flex flex-col justify-center items-center h-full">
          <button className="px-2 py-2 bg-gray-300 text-black rounded-full hover:px-6 mb-1 hover:bg-white">
            Play
          </button>
          {"IMDB : " + movie.vote_average + " (" + movie.vote_count + ")"}
        </p>
      </div>
    </div>
  );
};

export default Movie;
