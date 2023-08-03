import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

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
      <h2 className="text-white font-bold md:text-xl pt-8 pb-1 ">{title}</h2>
      <div
        id={"slider"}
        className="w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {rowMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Row;
