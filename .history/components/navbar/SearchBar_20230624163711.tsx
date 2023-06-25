import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function SearchBar() {
  return (
    <form className="flex items-center space-l-5 bg-white rounded-md p-2 shadow-sm border border-gray-200 flex-1 md:flex-initial">
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
