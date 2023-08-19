import React from "react";
import { Banner, Footer, Header, Row, Slider } from "../../components";
import requests from "../../services/requests";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Banner />
      <Slider />

      <Row title="Latest & Trending" fetchUrl={requests.fetchTreding} />

      <Row title="Popular Shows" fetchUrl={requests.fetchPopularShows} />

      <Row
        title="Movies Recommended For You"
        fetchUrl={requests.fetchTopRatedMovies}
      />

      <Row
        title="Shows Recommended For You"
        fetchUrl={requests.fetchTopRatedShows}
      />

      <Row title="Popular  Movies" fetchUrl={requests.fetchPopularMovies} />

      <Row title="Popular in Action" fetchUrl={requests.fetchActionMovies} />

      <Row title="Popular in Comedy " fetchUrl={requests.fetchComedyMovies} />

      <Row title="Best of Horrar" fetchUrl={requests.fetchHorroMovies} />

      <Row
        title=" Popular in Romance "
        fetchUrl={requests.fetchRomanticMovies}
      />

      <Row title="Popular in Mystery" fetchUrl={requests.fetchMysteryMovies} />

      <Row title="Popular in Western " fetchUrl={requests.fetchWesternMovies} />

      <Row
        title="Best of Animation "
        fetchUrl={requests.fetchAnimationMovies}
      />

      <Row title="Quix Shows" fetchUrl={requests.fetchTv} />

      <Row title="Best of Superheroes" fetchUrl={requests.fetchSciFi} />

      <Row
        title="Popular in Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />

      <Footer />
    </>
  );
};

export default Dashboard;
