import React from "react";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { signOut } from "firebase/auth";
import swal from "sweetalert";

const Transparentheader = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
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
    <header className=" bg-transparent sticky inset-0 z-50  text-white h-16 flex justify-between items-center   lg:h-20 ">
      <div className="  px-2 lg:px-14 flex items-center ">
        <div className="  cursor-pointer">
          <img
            src="../../images/disneyhotstar.svg"
            className=" object-contain mb-3   w-32 lg:h-16 lg:w-40 "
            alt="Disney Hotstar"
            onClick={() => navigate("/disney-hotstar")}
          />
        </div>
      </div>

      <div className="  flex  items-center mr-1 lg:mr-0 lg:px-10 ">
        <div className=" relative ">
          {!user ? (
            <Link to="/sign-in">
              <h1 className="focus:outline-none mx-4 my-1 uppercase font-semibold text-base tracking-wider cursor-pointer mr-2  lg:mr-5 ">
                login
              </h1>
            </Link>
          ) : (
            <div className="   ml-20 mr-2   lg:mt-4 group lg:ml-20 lg:mr-3">
              <span className="" onClick={handleLogout}>
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
