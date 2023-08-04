import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
const MovieList = ({ fetchURL, title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, []);
  return (
    <div className="p-5">
      <h1 className="text-white text-4xl font-bold font-serif mb-4">{title}</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-20  gap-y-12 mx-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="inline-block relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="border-none rounded-lg h-[240px] mx-auto"
            />
            <p className="text-white text-center">{movie.title}</p>
            <div className="top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white absolute cursor-pointer">
              <p className="flex flex-col justify-center items-center h-full">
                <button className="px-2 py-2 bg-gray-300 text-black rounded-full hover:px-6 mb-2 hover:bg-white">
                  Play
                </button>
                <FaRegHeart />
                {"IMDB : " + movie.vote_average + " (" + movie.vote_count + ")"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
