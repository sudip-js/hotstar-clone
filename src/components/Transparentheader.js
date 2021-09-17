import React, { useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";
import { auth } from "../config/firebase";
import { Redirect, Link, useHistory } from "react-router-dom";

const Transparentheader = () => {
  let history = useHistory();

  const [search, setSearch] = useState("");
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut();
    return <Redirect to="/" />;
  };
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className=" bg-transparent sticky inset-0 z-50  text-white h-16 flex justify-between items-center   lg:h-20 ">
      <div className="  px-2 lg:px-14 flex items-center ">
        {user && (
          <div className="   cursor-pointer">
            <MenuIcon className=" h-8 w-8 text-gray-400" />
          </div>
        )}

        <div className="  cursor-pointer">
          <img
            src="../../images/disneyhotstar.svg"
            className=" object-contain mb-3   w-32 lg:h-16 lg:w-40 "
            alt="Disney Hotstar"
            onClick={() => history.push("/disney-hotstar")}
          />
        </div>

        {user && (
          <div className="hidden lg:inline-block">
            <div className=" flex items-center space-x-9 px-6">
              <p>TV</p>
              <p>Movies</p>
              <p>Sports</p>
              <p>Premium</p>
              <p>Disney+</p>
              <p className=" text-yellow-400 font-extrabold tracking-wider">
                Kids
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="  flex  items-center mr-1 lg:mr-0 lg:px-10 ">
        {user && (
          <div className=" hidden lg:inline-block">
            <div className=" flex items-center cursor-text mr-4">
              <input
                type="text"
                value={search}
                onChange={onInputChange}
                placeholder="Search"
                className=" relative  bg-transparent outline-none border-b-2 border-gray-400  leading-8 text-gray-500 font-bold text-base   lg:w-56"
              />

              <div className=" absolute pl-52">
                <SearchIcon className=" cursor-pointer h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {user && (
          <div className=" lg:ml-4  lg:inline-block">
            <button className="bg-transparent   shadow-2xl border-2 rounded border-opacity-50 font-normal tracking-widest  lg:font-bold  mb-2  lg:mb-0  text-xs py-1 px-2  uppercase lg:py-2 lg:px-6 cursor-pointer  lg:hover hover:border-subscribe_btn transition duration-500 focus:bg-none ">
              subscribe
            </button>
          </div>
        )}

        <div className=" relative ">
          {!user ? (
            <Link to="/login">
              <h1 className="focus:outline-none mx-4 my-1 uppercase font-semibold text-base tracking-wider cursor-pointer mr-2  lg:mr-5 ">
                login
              </h1>
            </Link>
          ) : (
            <div className="   ml-20 mr-2   lg:mt-4 group lg:ml-20 lg:mr-3">
              <span className="" onClick={(e) => signOut(e)}>
                <img
                  src="../../images/profileicon.svg"
                  alt="logout"
                  className=" cursor-pointer mb-2  h-8  lg:mb-0 mr-3 lg:mr-0 "
                />
              </span>
              <div className=" hidden lg:inline">
                <h1 className="  lg:text-xs opacity-0 group-hover:opacity-100 transition duration-500">
                  logout
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Transparentheader;
