import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBanner } from "../services";
import swal from "sweetalert";

const IMAGE_BASE_URL = process.env.REACT_APP_TMDB_API__IMAGE_BASE_URL;
const Banner = () => {
  const [banner, setBanner] = useState(null);
  useQuery({
    queryKey: ["fetch-banner"],
    queryFn: fetchBanner,
    select: (data) => data?.data,
    onSuccess: (data) => {
      if (data?.results) {
        setBanner(
          data.results[Math.floor(Math.random() * data.results?.length - 1)]
        );
      } else {
        setBanner(null);
        swal({
          type: "danger",
          text: "Unavailable Banner",
          icon: "error",
          timer: 3000,
        });
      }
    },
  });

  return (
    <section className="  md:hidden lg:hidden">
      <div className="   flex flex-col justify-center space-y-2 py-3 px-2   lg:flex lg:flex-row-reverse">
        {banner && Object.keys(banner)?.length > 0 ? (
          <div className="  w-full  lg:mx-5">
            <img
              src={`${IMAGE_BASE_URL}${
                banner?.backdrop_path || banner?.poster_path
              }`}
              className=" border-2 border-gray-600 border-opacity-100 rounded h-48 object-cover  w-full sm:object-cover md:object-cover "
              alt={
                banner?.title ||
                banner?.name ||
                banner?.original_name ||
                banner?.original_title
              }
            />
          </div>
        ) : null}

        <div className="  flex justify-between items-center lg:flex lg:flex-col  lg:space-y-4  ">
          <div className="   px-1 h-16 w-44 flex items-center justify-between space-x-2 ">
            <div className="">
              <img
                src="../../images/disneylogomobile.png"
                className=" h-9 rounded  "
                alt=""
              />
            </div>
            <>
              <h1 className=" text-sm">
                {banner?.name || banner?.original_name}
              </h1>
              {banner?.first_air_date && (
                <h1 className=" text-gray-300 text-xs">
                  Start in {banner.first_air_date}
                </h1>
              )}
            </>
          </div>

          <p className=" hidden lg:inline-block  max-w-xs px-12  ">
            Get set for horrar flim Sonia Albizuri, Miss Jane.Releasing on
            Oct.10.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
