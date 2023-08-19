import React, { useState } from "react";
import Transparentheader from "./Transparentheader";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/original";

const opts = {
  height: "630",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const MovieDetails = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const information = useSelector(({ movieInfo }) => movieInfo?.details);
  const location = useLocation();

  const playTrailer = (information) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        information?.title ||
          information.original_title ||
          information.name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log(" movie trailer is not available !"));
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  useEffect(() => {
    if (!location?.search) return;
    playTrailer(information);
  }, [location?.search, information]);

  return (
    <div className=" min-h-screen bg-black">
      <Transparentheader />
      <section className="">
        <div className=" flex flex-col lg:relative">
          {!trailerUrl && (
            <div className="">
              <img
                src={`${baseUrl}${
                  information?.backdrop_path || information?.poster_path
                }`}
                alt={information?.title}
                className=" opacity-100 object-contain lg:w-full lg:object-cover lg:opacity-50"
              />
            </div>
          )}

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          <div className=" pb-60  lg:pt-0 lg:pb-0 lg:absolute top-72 left-10 lg:w-96 pl-3 ">
            <div className=" ">
              <div className=" relative  lg:relative flex items-center ">
                <img src="../../images/logo.svg" alt="" className=" h-8 " />
                <h1 className=" absolute lg:absolute uppercase text-xs font-bold tracking-widest left-16 top-3 ">
                  series
                </h1>
              </div>
              <div className="space-y-4">
                <div className=" space-y-1">
                  <h1 className="uppercase text-xl font-bold lg:text-4xl lg:font-bold">
                    {information?.title ||
                      information?.original_title ||
                      information?.name}
                  </h1>

                  <div className=" flex items-center text-xs space-x-6 text-gray-300">
                    <h1 className="">{information?.release_date}</h1>
                    <h1 className=" border-2 border-opacity-30 px-1 ">
                      4K Ultra HD
                    </h1>
                    <h1 className=" border-2 border-opacity-30 px-1 ">
                      {information?.vote_average}
                    </h1>
                  </div>
                </div>

                <div className=" flex items-center space-x-2">
                  <div
                    className="relative  py-1 bg-white text-black rounded-sm"
                    onClick={() => playTrailer(information)}
                  >
                    {!trailerUrl ? (
                      <PlayArrowIcon className=" absolute left-0 z-10 " />
                    ) : (
                      <ArrowBackIcon className=" absolute left-0 z-10 " />
                    )}

                    <button className=" relative  w-16 left-2 font-medium text-sm  ">
                      {!trailerUrl ? "Play" : "back"}
                    </button>
                  </div>
                </div>
                <div className="  w-72">
                  <p className=" text-xs text-gray-300">
                    {truncate(information?.overview, 250)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
