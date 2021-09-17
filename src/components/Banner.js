import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import requests from "../services/requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [trailerunavailable, setTrailerunavailable] = useState(false);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests?.fetchNetFlixOriginals);
      if (res.data.results) {
        setBanner(
          res?.data?.results[
            Math.floor(Math.random() * res?.data?.results?.length - 1)
          ]
        );
      } else {
        console.log("OPPS ! Temporarily Unavailable ");
      }

      return res;
    }
    fetchData();
  }, []);

  const opts = {
    height: "250",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = (bannerdetails) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        bannerdetails?.title ||
          bannerdetails?.original_title ||
          bannerdetails?.name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url)?.search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => setTrailerunavailable(true));
    }
  };

  return (
    <section className="  md:hidden lg:hidden">
      <div className="   flex flex-col justify-center space-y-2 py-3 px-2   lg:flex lg:flex-row-reverse">
        {!trailerUrl && (
          <div className="  w-full  lg:mx-5">
            <img
              src={`${baseUrl}${banner?.backdrop_path || banner?.poster_path}`}
              className=" border-2 border-gray-600 border-opacity-100 rounded h-48 object-cover  w-full sm:object-cover md:object-cover "
              alt={
                banner?.title ||
                banner?.name ||
                banner?.original_name ||
                banner?.original_title
              }
            />
          </div>
        )}

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        <div className="  flex justify-between items-center lg:flex lg:flex-col  lg:space-y-4  ">
          <div className="   px-1 h-16 w-44 flex items-center justify-between space-x-2 ">
            <div className="">
              <img
                src="../../images/disneylogomobile.png"
                className=" h-9 rounded  "
                alt=""
              />
            </div>
            <div className="   ">
              <h1 className=" text-sm">
                {banner?.name || banner?.original_name}
              </h1>
              <h1 className=" text-gray-300 text-xs">
                Start in {banner?.first_air_date}
              </h1>
            </div>
          </div>

          <p className=" hidden lg:inline-block  max-w-xs px-12  ">
            Get set for horrar flim Sonia Albizuri, Miss Jane.Releasing on
            Oct.10.{" "}
          </p>

          <div className=" text-center ">
            <button
              onClick={() => playTrailer(banner)}
              className="  border-2 rounded border-subscribe_btn border-opacity-70 text-subscribe_btn text-sm py-2  px-6 uppercase font-normal lg:px-8 lg:py-1 outline-none"
            >
              {!trailerUrl ? "watch trailer" : "cancel"}
            </button>
          </div>
        </div>
        {trailerunavailable && (
          <h1 className=" text-sm font-medium text-gray-400">
            OPPS Temporarily Unavailable !
          </h1>
        )}
      </div>
    </section>
  );
};

export default Banner;
