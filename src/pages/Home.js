import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";


const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={requests.upcomingRequest} />
      <Row rowID="2" title="Popular" fetchURL={requests.popularRequest} />
      <Row rowID="3" title="Top-Rated" fetchURL={requests.topRatedRequest} />
      <Row rowID="4" title="Trending" fetchURL={requests.trendingRequest} />
    </>
  );
};

export default Home;
