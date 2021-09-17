import React from "react";

const Section = ({ title, content, image }) => {
  return (
    <>
      <section className=" bg-background_color py-10 -mt-6 lg:-mt-0   space-y-6 border-t-8 lg:border-b-8 lg:border-t-0 border-white border-opacity-10 lg:flex lg:items-center ">
        <div className=" flex flex-col items-center w-11/12 mx-auto space-y-3  lg:max-w-2xl lg:px-12 lg:mx-20 lg:text-left lg:items-start cursor-text ">
          <h1 className=" text-2xl font-bold lg:text-5xl lg:mb-2 ">{title}</h1>
          <p className=" text-center text-gray-200 font-medium text-lg leading-6 lg:text-2xl lg:text-left lg:font-semibold">
            {content}
          </p>
        </div>
        <div className=" mx-auto w-11/12 hover:translate-x-10   ">
          <img
            src={image}
            className=" object-contain  w-3/4 mx-auto rounded border-b-4 border-l-2 border-t-2 border-r-4  border-white border-opacity-30 shadow-2xl lg:border-subscribe_btn  "
            alt=" Disney hotstar "
          />
        </div>
      </section>
    </>
  );
};

export default Section;
