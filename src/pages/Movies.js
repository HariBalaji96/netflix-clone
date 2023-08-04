import React from "react";
import requests from "../Request";
import MovieList from "../components/MovieList";

const Movies = () => {
  return (
    <div className="pt-32">
      <MovieList key="1" fetchURL={requests.popularRequest} title="Popular" />
      <MovieList key="2" fetchURL={requests.trendingRequest} title="Trending" />
      <MovieList
        key="3"
        fetchURL={requests.topRatedRequest}
        title="Top-Rated"
      />
      <MovieList key="4" fetchURL={requests.upcomingRequest} title="Upcoming" />
    </div>
  );
};

export default Movies;
