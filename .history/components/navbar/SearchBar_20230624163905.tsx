import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function SearchBar() {
  return (
    <form         className="w-full  h-full py-2 pl-10 pr-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 placeholder:text-gray-400 focus:placeholder:text-gray-500"
    >
      <HiMagnifyingGlass className="w-6 h-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none p-1 "
      />
      <button hidden> Search</button>
    </form>
  );
}
