import React from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";
import swal from "sweetalert";
import { signOut } from "firebase/auth";

const Header = () => {
  const { user } = useAuth();
  const handleLogout = () => {
    try {
      swal({
        text: "Are you sure you want to logout?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await signOut(auth);
        }
      });
    } catch (error) {
      swal({
        type: "danger",
        text: error?.message ?? "Something went wrong!",
        icon: "error",
        timer: 3000,
      });
    }
  };

  return (
    <header className=" bg-headerColor sticky inset-0 z-50  text-white h-16 flex justify-between items-center  lg:h-20 ">
      <div className=" lg:space-x-1  px-2 lg:px-10 flex items-center xl:px-14 2xl:px-14  ">
        <div className="  cursor-pointer">
          <img
            src="../../images/disneyhotstar.svg"
            className=" object-contain mb-3   w-32 lg:h-16 lg:w-40 "
            alt="Disney Hotstar"
          />
        </div>
      </div>

      <div className="   flex  items-center mr-1 lg:mr-0 lg:px-10 ">
        <div className=" ">
          {!user ? (
            <Link to="/sign-in">
              <h1 className="focus:outline-none mx-4 my-1 uppercase font-semibold text-base tracking-wider cursor-pointer mr-2  lg:mr-5 ">
                login
              </h1>
            </Link>
          ) : (
            <div className="  ml-20   lg:mt-4 group lg:ml-20 lg:mr-3">
              <span className="" onClick={handleLogout}>
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
