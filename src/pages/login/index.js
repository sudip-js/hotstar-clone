import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className=" lg:flex lg:items-center lg:justify-center  ">
      <div className=" hidden   mt-52 mr-20   lg:inline-block">
        <div className="  border-r-4 border-t-4 border-b-2 border-l-2 border-headerColor hover:border-opacity-80	 bg-headerColor opacity-40 hover:opacity-100 hover:border-subscribe_btn transform hover:scale-125	 transition duration-500 ease-in-out shadow-2xl  ">
          <img
            src="../../../images/image3.jpg"
            alt=""
            className=" h-80 object-contain  "
          />
        </div>
      </div>

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

        {/* {loading && (
          <div className=" ">
            <h1 className=" font-medium text-base" id="login_failed">
              {" "}
              Please wait ....
            </h1>
          </div>
        )}

        {loginfailed && (
          <div className=" ">
            <h1 className=" font-medium text-base" id="login_failed">
              {" "}
              Incorrect email or password
            </h1>
          </div>
        )}

        {signupfailed && (
          <div className=" ">
            <h1 className=" font-medium text-base" id="login_failed">
              This account is already taken.Try another one.{" "}
            </h1>
          </div>
        )} */}

        <form method="POST">
          <div className="   space-y-1 py-3 lg:max-w-sm lg:mx-auto lg:space-y-3">
            <h1 className=" font-medium text-sm text-gray-300 lg:text-3xl lg:font-bold">
              Log in with your email
            </h1>

            <div className="">
              <input
                type="text"
                autoComplete="off"
                name="email"
                placeholder="Email"
                className=" w-full bg-headerColor focus:outline-none border-2 border-opacity-20 px-2 text-sm font-medium text-gray-400 py-3 lg:py-3"
              />
              <p className=" text-sm font-normal " id="email_error"></p>
            </div>
            <div className=" relative flex  ">
              <input
                autoComplete="off"
                name="password"
                placeholder="Password"
                className=" relative w-full bg-headerColor focus:outline-none border-2 border-opacity-20 px-2 text-sm font-medium text-gray-400 py-3 lg:py-3"
              />
              <div className="  absolute left-64 top-3 lg:ml-24 ">Icon</div>
            </div>
            <p className="  text-sm font-normal " id="password_error"></p>

            <button className=" border-2 border-opacity-20 hover:bg-subscribe_btn hover:border-opacity-0 transition duration-500 ease-in-out w-full  tracking-wide cursor-pointer  py-2 uppercase font-medium focus:outline-none lg:py-3 lg:font-bold">
              continue
            </button>
            <h1 className=" font-medium text-sm text-gray-300">
              New to Disney+ hotstar ?{" "}
              <button className=" cursor-pointer hover:underline">
                Sign up
              </button>
            </h1>

            <div className=" flex items-center space-x-4">
              <h1>Or Login with</h1>
              <div className=" flex space-x-4 ">
                <FaGoogle className=" cursor-pointer " />
              </div>
            </div>
          </div>
        </form>

        <div className="  py-1 border-t-2 border-opacity-80 border-subscribe_btn  lg:max-w-sm lg:mx-auto -mt-5 ">
          <div className=" flex items-center space-x-1">
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
    </section>
  );
};

export default Login;
