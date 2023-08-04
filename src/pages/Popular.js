import React from "react";
import requests from "../Request";
import MovieList from "../components/MovieList";

const Popular = () => {
  return (
    <div className="pt-32">
      <MovieList
        key="1"
        fetchURL={requests.trendingRequest}
        title="New Movies"
      />
      <MovieList
        key="2"
        fetchURL={requests.popularRequest}
        title="Popular Movies"
      />
    </div>
  );
};

export default Popular;
