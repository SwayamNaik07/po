import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl inline font-bold primary-color ml-4 bg-gradient-to-r to-pink-600 from from-amber-400 text-transparent bg-clip-text animate-pulse">
        SwayamNaik
      </h1>
      <ul className="hidden md:flex gap-5 mr-3 ">
        <li>
          <a className="hover:text-white" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#work">
            Work
          </a>
        </li>
        <li>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "border border-gray-600 z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl  font-bold primary-color m-4 bg-gradient-to-r to-pink-600 from-amber-400 text-transparent bg-clip-text ">
          SwayamNaik
        </h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a onClick={handleNav} href="#about">
              About
            </a>
          </li>
          <li className="p-2">
            <a onClick={handleNav} href="#work">
              Work
            </a>
          </li>
          <li className="p-2">
            <a onClick={handleNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
