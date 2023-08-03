import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-2 z-[100] w-full absolute">
      <div className="cursor-pointer m-2">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix-Logo"
          className="h-9"
        />
      </div>
      <ul className="flex text-white ml-10">
        <li className="cursor-pointer mx-5 flex items-center hover:underline font-semibold ">
          Home
        </li>
        <li className="cursor-pointer mx-5 flex items-center hover:underline font-semibold ">
          Movies
        </li>
        <li className="cursor-pointer mx-5 flex items-center hover:underline font-semibold ">
          New & Popular
        </li>
        <li className="cursor-pointer mx-5 flex items-center hover:underline font-semibold ">
          My List
        </li>
      </ul>
      <div className="ml-auto">
        <button className="border-2 border-red-600 font-semibold text-white px-6 py-2 rounded-md cursor-pointer m-2 bg-black bg-opacity-10 shadow-md">
          Sign In
        </button>
        <button className="bg-red-600 text-white px-6 font-semibold py-2 rounded-md cursor-pointer m-2 shadow-md">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
