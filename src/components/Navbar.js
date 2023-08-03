import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-black z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer m-2">
        NETFLIX
      </h1>
      <div className="ml-auto">
        <button className="border-2 border-red-600 shadow-red-600 text-white px-6 py-2 rounded-md cursor-pointer m-2">
          Sign In
        </button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md cursor-pointer m-2">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
