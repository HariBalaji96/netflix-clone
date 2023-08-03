import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex p-1 md:p-2 z-[100] w-full absolute">
      <div className="cursor-pointer m-2">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix-Logo"
          className="h-7 md:h-9"
        />
      </div>
      <ul className="lg:flex text-white hidden lg:ml-10 ">
        <li className="cursor-pointer lg:mx-5 flex items-center hover:underline font-semibold ">
          Home
        </li>
        <li className="cursor-pointer lg:mx-5 flex items-center hover:underline font-semibold ">
          Movies
        </li>
        <li className="cursor-pointer lg:mx-5 flex items-center hover:underline font-semibold ">
          New & Popular
        </li>
        <li className="cursor-pointer lg:mx-5 flex items-center hover:underline font-semibold ">
          My List
        </li>
      </ul>
      <div className="ml-auto hidden lg:block">
        <button className="border-2 border-red-600 font-semibold text-white px-4 py-1 md:px-6 md:py-2 rounded-md cursor-pointer m-2 bg-black bg-opacity-10 shadow-md">
          Sign In
        </button>
        <button className="bg-red-600 text-white  font-semibold  px-4 py-1 md:px-6  md:py-2 rounded-md cursor-pointer m-2 shadow-md">
          Sign Up
        </button>
      </div>
      <div className="text-white flex items-center lg:hidden ml-auto pr-2">
        <BiMenu size={48} />
      </div>
      <ul className=" text-white hidden">
        <li className="cursor-pointer flex items-center hover:underline font-semibold ">
          Sign In
        </li>
        <li className="cursor-pointer flex items-center hover:underline font-semibold ">
          Sign Up
        </li>
        <li className="cursor-pointer flex items-center hover:underline font-semibold ">
          Home
        </li>
        <li className="cursor-pointer flex items-center hover:underline font-semibold ">
          Movies
        </li>
        <li className="cursor-pointer  flex items-center hover:underline font-semibold ">
          New & Popular
        </li>
        <li className="cursor-pointer flex items-center hover:underline font-semibold ">
          My List
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
