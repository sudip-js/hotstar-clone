import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieInformation } from "../redux/features/movieInfoSlice";
import Skeleton from "react-loading-skeleton";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, movies }) => {
  console.log({ movies });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieDetails = (movie) => {
    const {
      original_title = null,
      original_name = null,
      title = null,
      id = null,
    } = movie;
    dispatch(
      movieInformation({
        name: movie.name,
        backdrop_path: movie.backdrop_path,
        id: movie.id,
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        vote_average: movie.vote_average,
      })
    );

    const pathTitle =
      title?.replaceAll(" ", "-") ||
      original_title?.replaceAll(" ", "-") ||
      original_name?.replaceAll(" ", "-");

    const path = `${pathTitle?.toLowerCase()}?${id}`;
    navigate(`/dashboard/${path}`);
  };

  return (
    <div className="lg:px-12 lg:mt-2 lg:p-0">
      <section>
        <div className=" flex flex-col space-y-1">
          {movies?.status === "loading" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Skeleton
                style={{
                  height: "2rem",
                  width: "300px",
                }}
                containerClassName="flex"
              />
              <Skeleton
                style={{
                  height: "1.5rem",
                  width: "50px",
                }}
                containerClassName="flex"
              />
            </div>
          )}
          {movies?.status === "success" && (
            <div className="px-1  flex justify-between items-center lg:px-0">
              <h1 className=" cursor-pointer hover:text-subscribe_btn transition duration-500 text-lg font-medium">
                {title}
              </h1>
              <h1 className=" uppercase text-sm font-medium text-subscribe_btn opacity-100">
                more
              </h1>
            </div>
          )}

          {movies?.status === "loading" && (
            <div className="posters px-1 py-2 flex space-x-2  overflow-y-hidden  overflow-x-scroll lg:px-0 hide-scrollbar">
              {Array.from({ length: 20 }).map((_, index) => (
                <Skeleton
                  key={index}
                  style={{
                    height: "14rem",
                    width: "10rem",
                  }}
                />
              ))}
            </div>
          )}
          {movies?.status === "success" && (
            <div className="posters px-1 py-2 flex space-x-2  overflow-y-hidden  overflow-x-scroll lg:px-0 hide-scrollbar">
              {movies?.data?.map((movie) => (
                <img
                  src={`${baseUrl}${movie?.poster_path}`}
                  alt={movie?.title}
                  className=" cursor-pointer rounded-lg h-40 w-28 object-cover lg:w-40 lg:h-56"
                  key={movie?.id}
                  onClick={() => movieDetails(movie)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Row;
