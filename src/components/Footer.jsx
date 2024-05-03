import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto gap-2 ">
      <div className="bg-gradient-to-r to-pink-600 from-amber-400 text-transparent bg-clip-text inline md:text-3xl  sm:text-xl">
        SwayamNaik©️
      </div>
      <p className="text-gray-600 text-3xl flex gap-4  ">
        <a href="https://github.com/SwayamNaik07" target="_blank">
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/swayam-naik-3ab2b026a/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/_.swayamnaik._/" target="_blank">
          <FaInstagram />
        </a>
      </p>
    </div>
  );
};

export default Footer;
