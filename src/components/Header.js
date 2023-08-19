import React from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/userSlice";
import { auth } from "../config/firebase";
import { Navigate, Link } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut();
    return <Navigate to="/" />;
  };

  return (
    <header className=" bg-headerColor sticky inset-0 z-50  text-white h-16 flex justify-between items-center  lg:h-20 ">
      <div className=" lg:space-x-1  px-2 lg:px-10 flex items-center xl:px-14 2xl:px-14  ">
        {user && (
          <div className="  cursor-pointer">
            <MenuIcon className=" h-8 w-8 text-gray-400" />
          </div>
        )}

        <div className="  cursor-pointer">
          <img
            src="../../images/disneyhotstar.svg"
            className=" object-contain mb-3   w-32 lg:h-16 lg:w-40 "
            alt="Disney Hotstar"
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

      <div className="   flex  items-center mr-1 lg:mr-0 lg:px-10 ">
        {user && (
          <div className=" hidden lg:inline-block">
            <div className=" flex items-center cursor-text mr-4">
              <input
                type="text"
                placeholder="Search"
                className=" relative  bg-transparent outline-none border-b-2 border-gray-400 leading-8 text-gray-500 font-bold text-base lg:w-56"
              />

              <div className=" absolute pl-48">
                <SearchIcon className=" h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {user && (
          <div className=" lg:ml-4  lg:inline-block">
            <button className=" bg-subscribe_btn font-bold lg:mb-0 mb-1  text-xs py-1 px-2 rounded uppercase lg:py-2 lg:px-6 cursor-pointer lg:">
              subscribe
            </button>
          </div>
        )}

        <div className=" ">
          {!user ? (
            <Link to="/login">
              <h1 className="focus:outline-none mx-4 my-1 uppercase font-semibold text-base tracking-wider cursor-pointer mr-2  lg:mr-5 ">
                login
              </h1>
            </Link>
          ) : (
            <div className="  ml-20   lg:mt-4 group lg:ml-20 lg:mr-3">
              <span className="" onClick={(e) => signOut(e)}>
                <img
                  src="../../images/profileicon.svg"
                  alt="logout"
                  className=" cursor-pointer mb-1 h-8  lg:mb-0 mr-1 lg:mr-0 "
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

export default Header;
