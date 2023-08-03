import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Upcoming" fetchURL={requests.upcomingRequest} />
      <Row title="Popular" fetchURL={requests.popularRequest} />
      <Row title="Top-Rated" fetchURL={requests.topRatedRequest} />
      <Row title="Trending" fetchURL={requests.trendingRequest} />
    </>
  );
};

export default Home;
