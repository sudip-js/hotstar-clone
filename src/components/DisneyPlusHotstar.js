import React, { useEffect } from "react";
import { login, logout, selectUser } from "../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
import Banner from "./Banner";
import Slider from "./Slider";
import Row from "./Row";
import Footer from "./Footer";
import requests from "../services/requests";
import { Redirect } from "react-router-dom";
// import Moviedetails from "./Moviedetails";

const DisneyPlusHotstar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route exact path="/">
              <Header />
              <Landing />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Redirect to="/" />
          </>
        ) : (
          <>
            <Route exact path="/disney-hotstar">
              <Header />
              <Banner />
              <Slider />

              <Row title="Latest & Trending" fetchUrl={requests.fetchTreding} />

              <Row
                title="Popular Shows"
                fetchUrl={requests.fetchPopularShows}
              />

              <Row
                title="Movies Recommended For You"
                fetchUrl={requests.fetchTopRatedMovies}
              />

              <Row
                title="Shows Recommended For You"
                fetchUrl={requests.fetchTopRatedShows}
              />

              <Row
                title="Popular  Movies"
                fetchUrl={requests.fetchPopularMovies}
              />

              <Row
                title="Popular in Action"
                fetchUrl={requests.fetchActionMovies}
              />

              <Row
                title="Popular in Comedy "
                fetchUrl={requests.fetchComedyMovies}
              />

              <Row
                title="Best of Horrar"
                fetchUrl={requests.fetchHorroMovies}
              />

              <Row
                title=" Popular in Romance "
                fetchUrl={requests.fetchRomanticMovies}
              />

              <Row
                title="Popular in Mystery"
                fetchUrl={requests.fetchMysteryMovies}
              />

              <Row
                title="Popular in Western "
                fetchUrl={requests.fetchWesternMovies}
              />

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
            </Route>

            <Route exact path="/disney-hotstar/movies/:id">
              {/* <Moviedetails /> */}
            </Route>

            <Redirect to="/disney-hotstar" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default DisneyPlusHotstar;
