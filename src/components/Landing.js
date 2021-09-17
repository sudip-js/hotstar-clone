import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpeg";
import Image3 from "../images/frozennew.jpg";
import Image4 from "../images/image4.jpeg";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className=" ">
      <Hero />
      <Section
        title="Enjoy on your TV."
        content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image={Image1}
      />
      <Section
        title="Download your streams."
        content="Save your favourites easily and always have something to watch."
        image={Image2}
      />
      <Section
        title="Watch everywhere."
        content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={Image3}
      />
      <Section
        title="Create profiles for children."
        content="Send children on adventures with their favourite characters in a space made just for them."
        image={Image4}
      />
      <Footer />
    </div>
  );
};

export default Landing;
