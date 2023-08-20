import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BackIcon } from "../assets/icons";

const IMAGE_BASE_URL = process.env.REACT_APP_TMDB_API__IMAGE_BASE_URL;
const opts = {
  width: "100%",
  height: "750px",
  playerVars: {
    autoplay: 1,
  },
};

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isTrailerExist, setIsTrailerExist] = useState(false);

  const information = useSelector(({ movieInfo }) => movieInfo?.details);

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
          setIsTrailerExist(true);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => {
          setIsTrailerExist(false);
        });
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
      <div className=" flex flex-col lg:relative">
        {!trailerUrl && (
          <div className="">
            <img
              src={`${IMAGE_BASE_URL}${
                information?.backdrop_path || information?.poster_path
              }`}
              alt={information?.title}
              className=" opacity-100 object-contain lg:w-full lg:object-cover lg:opacity-50"
            />
          </div>
        )}

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        {!trailerUrl && (
          <button
            type="button"
            className="btn bg-white text-black lg:absolute top-10 left-10 rounded-full p-2"
            onClick={() => navigate("/dashboard")}
          >
            <BackIcon
              style={{
                fontSize: "1.5rem",
              }}
            />
          </button>
        )}

        <div className=" pb-60  lg:pt-0 lg:pb-0 lg:absolute top-72 left-10 lg:w-96 pl-3 ">
          <>
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

              {isTrailerExist ? (
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
              ) : null}

              <div className="  w-72">
                <p className=" text-xs text-gray-300">
                  {truncate(information?.overview, 250)}
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
