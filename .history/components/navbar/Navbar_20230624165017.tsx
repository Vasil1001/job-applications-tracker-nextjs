import React from "react";
import SearchBar from "./SearchBar";
import { IoIosApps } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      
      {/* Logo */}
      <div className="flex items-center font-bold text-3xl">
        <IoIosApps size={40} className="mr-3" />
        <span className="text-gray-800 hidden sm:block">Job Tracker</span>
      </div>
      
      {/* Search input, button and profile */}
      <div className="flex gap-3.5">
        <SearchBar />
        <button className="py-2 px-4 flex-initial text-black border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 ">
          User
        </button>
      </div>
    </div>
  );
}
