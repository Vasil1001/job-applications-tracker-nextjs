import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function SearchBar() {
  return (
    <form></form>
    <div className="relative  ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <HiMagnifyingGlass className="w-6 h-6 text-gray-400" />
      </span>

      <input
        type="text"
        className="w-full flex-1 h-full py-2 pl-10 pr-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 placeholder:text-gray-400 focus:placeholder:text-gray-500"
        placeholder="Search"
      />
    </div>
  );
}
