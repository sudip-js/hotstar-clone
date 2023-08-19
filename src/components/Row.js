import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieInformation } from "../redux/features/movieinfoSlice";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);

        return request;
      }
      fetchData();
    } catch {
      console.log("temperoraily unavailable");
    }
  }, [fetchUrl]);

  const movieDetails = (movie) => {
    console.log({ movie });
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
    <div className="   lg:px-12 lg:mt-2 lg:p-0">
      <section className="">
        <div className=" flex flex-col space-y-1">
          <div className=" px-1  flex justify-between items-center lg:px-0">
            <h1 className=" cursor-pointer hover:text-subscribe_btn transition duration-500 text-lg font-medium">
              {title}
            </h1>
            <h1 className=" uppercase text-sm font-medium text-subscribe_btn opacity-100">
              more
            </h1>
          </div>

          <div className="posters px-1 py-2 flex space-x-2  overflow-y-hidden  overflow-x-scroll lg:px-0 ">
            {movies.map((movie) => (
              <img
                src={`${baseUrl}${movie?.poster_path}`}
                alt={movie?.title}
                className=" cursor-pointer rounded-lg h-40 w-28 object-cover lg:w-40 lg:h-56"
                key={movie?.id}
                onClick={() => movieDetails(movie)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Row;
