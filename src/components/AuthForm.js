import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeClose, EyeOpen } from "../assets/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../config/firebase";
import { Spinner } from "react-bootstrap";
import { useState } from "react";
import swal from "sweetalert";
import { handleFetchDataFromUrls } from "../utils";

const AuthForm = ({
  title = "",
  description = "",
  accountTitle = "",
  accountLinkText = "",
  accountLink = "",
  buttonText = "",
  register = null,
  handleSubmit = () => null,
  errors = null,
  onSubmitForm = () => null,
  isLoading = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSocialAuth = async ({ type = "google" }) => {
    try {
      if (type === "google") await signInWithPopup(auth, googleProvider);
      if (type === "github") await signInWithPopup(auth, githubProvider);
      await handleFetchDataFromUrls();
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
    <div className="-mt-10 lg:-mt-0   py-6  lg:py-8 px-10 space-y-1 ">
      <div className=" mt-7 lg:mt-0 pr-6 ">
        <Link to="/">
          <img
            src="../images/logo.svg"
            className=" h-40 w-full object-contain object-center  "
            alt=" Disney logo"
          />
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="space-y-1 py-3 lg:max-w-sm lg:mx-auto lg:space-y-3">
          <div>
            <h1 className=" font-medium text-sm text-gray-300 lg:text-3xl lg:font-bold">
              {title}
            </h1>
            <p className="font-medium text-md">{description}</p>
          </div>
          <div>
            <input
              {...register("email")}
              // autoComplete="off"
              placeholder="Enter email"
              className=" w-full bg-headerColor focus:outline-none border-2 border-opacity-20 px-2 text-sm font-medium text-gray-400 py-3 lg:py-3"
            />
            {errors?.email && (
              <p className="text-sm text-red-600 font-medium ">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div>
            <div className="relative flex items-center">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                // autoComplete="off"
                placeholder="Enter password"
                className="w-full bg-headerColor focus:outline-none border-2 border-opacity-20 px-2 text-sm font-medium text-gray-400 py-3 lg:py-3"
              />
              <div
                className="absolute left-64 lg:ml-24 "
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeClose
                    className="font-bold cursor-pointer"
                    style={{
                      fontSize: "20px",
                    }}
                  />
                ) : (
                  <EyeOpen
                    className="font-bold cursor-pointer"
                    style={{
                      fontSize: "20px",
                    }}
                  />
                )}
              </div>
            </div>
            {errors?.password && (
              <p className="text-sm text-red-600 font-medium ">
                {errors.password?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="border-2 border-opacity-20 hover:bg-subscribe_btn hover:border-opacity-0 transition duration-500 ease-in-out w-full  tracking-wide cursor-pointer  py-2 uppercase  focus:outline-none lg:py-3 "
          >
            {isLoading ? (
              <span className="font-medium lg:font-bold">
                <Spinner size="sm" />
              </span>
            ) : (
              <span className="font-medium lg:font-bold">{buttonText}</span>
            )}
          </button>
          <h1 className=" font-medium text-sm text-gray-300">
            {accountTitle}{" "}
            <button
              type="button"
              onClick={() => navigate(`/${accountLink}`)}
              className="cursor-pointer hover:underline"
            >
              {accountLinkText}
            </button>
          </h1>

          <div className="flex flex-col items-center space-y-3">
            <h1>Or</h1>
            <button
              type="button"
              className="tracking-wide cursor-pointer  py-2 uppercase font-medium focus:outline-none lg:py-3 lg:font-medium bg-white w-full text-black"
              onClick={() =>
                handleSocialAuth({
                  type: "google",
                })
              }
            >
              Continue With Google
            </button>
            <button
              type="button"
              className="tracking-wide cursor-pointer  py-2 uppercase font-medium focus:outline-none lg:py-3 lg:font-medium bg-black w-full text-white"
              onClick={() =>
                handleSocialAuth({
                  type: "github",
                })
              }
            >
              Continue With Github
            </button>
          </div>
        </div>
      </form>

      <div className="  py-1 border-t-2 border-opacity-80 border-subscribe_btn  lg:max-w-sm lg:mx-auto -mt-5 ">
        <div className="flex items-center space-x-1">
          <img
            src="../../../images/logo.svg"
            className=" lg:mt-2  h-10"
            alt=" Disney account"
          />
          <span className="  mt-3">account</span>
        </div>
      </div>

      <div className=" ">
        <h1 className=" text-sm text-gray-300 font-medium text-justify  lg:max-w-sm lg:mx-auto ">
          With this account,you can access: Disney+, Star Wars, Marvel, and
          other Walt Disney Company services.
        </h1>
      </div>
    </div>
  );
};

export default AuthForm;
