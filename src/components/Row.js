import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Row = ({ title, fetchURL }) => {
  const [rowMovies, setRowMovies] = useState([]);

  useEffect(() => {
    const fetchRow = async () => {
      try {
        const response = await axios.get(fetchURL);
        setRowMovies(response.data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchRow();
  }, []);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl pb-1">{title}</h2>
      <div className="flex items-center mb-3 group">
        <AiOutlineDoubleLeft
          fill="white"
          size={40}
          className="opacity-50 hover:opacity-100 absolute left-0 bg-gray-800  rounded-full z-[100] cursor-pointer hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {rowMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <AiOutlineDoubleRight
          fill="white"
          size={40}
          className="opacity-50 hover:opacity-100 absolute right-0 bg-gray-800  rounded-full cursor-pointer hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
