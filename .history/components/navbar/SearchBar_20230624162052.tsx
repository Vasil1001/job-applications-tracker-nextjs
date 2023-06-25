import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function SearchBar() {
  return (
    <div className="relative ">
      <span className="absolute inset-y-0 left-0 flex items-end pl-3">
        <HiMagnifyingGlass className="w-6 h-6 text-gray-400"/>
        {/* <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg> */}
      </span>

      <input
        type="text"
        className="w-full h-full py-2 pl-10 pr-4 border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 placeholder:text-gray-400 focus:placeholder:text-gray-500"
        placeholder="Search"
      />
    </div>
  );
}
