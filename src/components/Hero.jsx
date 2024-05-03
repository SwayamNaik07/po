import React from "react";
import hero from "../assets/hero.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black md:h-[70vh]">
      <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={hero} alt="hero-image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-4xl text-white sm:text-4xl lg:text-7xl font-extrabold ">
          <span className="bg-gradient-to-r to-pink-600 from-amber-400 text-transparent bg-clip-text inline">
            I am' a
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "UI/UX Designer.",
              1000,
              "Java Programmer.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My Name is Swayam Naik and I have 2 years of experience as a FrontEnd
          developer and a Java Programmer.
        </p>

        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-r to-pink-600 from-amber-400 "
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-r to-pink-600 from-orange-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
