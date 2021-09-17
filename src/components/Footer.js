import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <section className="  border-t-8 border-opacity-10 lg:border-t-0  px-4 py-6 lg:pt-20 pb-40 lg:pb-10 ">
      <div className="   lg:grid grid-cols-2  mb-14">
        <div className=" ">
          <div className=" space-y-4  px-2 py-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-3 lg:flex lg:items-center lg:space-y-0 lg:space-x-3 ">
            <div className="  flex justify-between items-center md:space-x-2 lg:space-x-8 sm:space-x-4 whitespace-nowrap md:text-xs ">
              <h1 className=" text-sm font-medium text-gray-200 cursor-pointer lg:text-xs">
                About Disney+ Hotstar
              </h1>
              <h1 className=" text-sm font-medium text-gray-200 cursor-pointer lg:text-xs ">
                Terms Of Use
              </h1>
            </div>
            <div className="  flex justify-between items-center lg:space-x-8 sm:space-x-4 md:space-x-4 whitespace-nowrap md:text-xs">
              <h1 className=" text-sm font-medium text-gray-200 cursor-pointer lg:text-xs ">
                Privacy Policy
              </h1>
              <h1 className=" text-sm font-medium text-gray-200 cursor-pointer lg:text-xs">
                FAQ
              </h1>
              <h1 className=" text-sm font-medium text-gray-200 cursor-pointer lg:text-xs">
                Feedback
              </h1>
              <h1 className=" text-sm font-medium text-gray-200 cursor-pointer lg:text-xs">
                Careers
              </h1>
            </div>
          </div>
          <div className="  text-xs leading-5 font-medium text-gray-300 px-2 text-justify sm:max-w-xl md:max-w-md lg:max-w-lg ">
            <p>
              &copy; 2021 STAR. All Rights Reserved. HBO, Home Box Office and
              all related channel and programming logos are service marks of,
              and all related programming visuals and elements are the property
              of, Home Box Office,lnc. All rights reserved.
            </p>
          </div>
        </div>

        <div className="  px-2 my-3 grid grid-cols-2 gap-2 whitespace-nowrap ">
          <div className="   lg:px-32 lg:py-2  ">
            <h1 className=" text-sm font-semibold text-gray-400">
              {" "}
              Contact with us
            </h1>
            <div className=" text-gray-400 py-1">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className=" lg:pt-2">
            <h1 className=" text-sm font-semibold text-gray-400">
              {" "}
              Disney+ Hotstar App
            </h1>

            <div className=" py-2 space-y-2 lg:flex lg:space-y-0 lg:space-x-1">
              <img
                src="../../images/img3.jpg"
                className=" rounded border-2 border-opacity-20 object-contain h-11 w-36 lg:h-8 lg:object-cover xl:h-11 "
                alt=""
              />
              <img
                src="../../images/img4.jpg"
                className="  rounded border-2 border-opacity-20 object-contain h-11 w-36 lg:h-8 lg:object-cover xl:h-11"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
