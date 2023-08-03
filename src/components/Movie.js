import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="relative p-2 inline-block w-[140px] h-[240px]">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="top-0 left-0 p-2 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white absolute cursor-pointer">
        <span className="flex m-2">{like ? <FaHeart /> : <FaRegHeart />}</span>
        <p className="flex justify-center items-center h-full max-w-[140px] break-words">
          {movie.original_title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
