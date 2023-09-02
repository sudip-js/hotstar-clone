import React from "react";
import { Banner, Footer, Header, Row, Slider } from "../../components";
import requests from "../../services/requests";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const moviesList = useSelector(({ movie }) => movie?.allMovies);
  return (
    <>
      <Header />
      <Banner />
      <Slider />
      {requests && Object.keys(requests)?.length > 0
        ? Object.keys(requests).map((key, index) => (
            <Row key={key} title={key} movies={moviesList?.[index]?.value} />
          ))
        : null}
      <Footer />
    </>
  );
};

export default Dashboard;
