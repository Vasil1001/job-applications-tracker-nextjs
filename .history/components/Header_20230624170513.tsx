import { Search } from "lucide-react";
import React from "react";
import SearchBar from "./navbar/SearchBar";
import { IoIosApps } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { FiUser } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Navbar from "./navbar/Navbar";
export default function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 xl:p-10 xl:px-24 bg-gray-500/10">
        {/* <Navbar /> */}
        {/* <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        /> */}
        {/* Logo */}
        <div className="flex items-center font-bold text-3xl mb-3">
          <IoIosApps size={40} className="mr-3" />
          <span className="text-gray-800">Job Tracker</span>
        </div>

        {/* Search input, button and profile */}
        <div>
          <form className="flex items-center space-l-5 bg-white rounded-md p-1 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 placeholder:text-gray-400 focus:placeholder:text-gray-500 flex-1 md:flex-initial">
            <HiMagnifyingGlass className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-1 "
            />
            <button hidden> Search</button>
          </form>
        </div>
        <div className="flex gap-3.5">
          {/* <SearchBar />
            <button className="py-2 px-4 flex-initial text-black border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 ">
              User
            </button> */}
        </div>
      </div>
      <h1>
        Job Application tracker + shadcn + zustand + dnd + TanStack Table +
        Appwrite Cloud + TypeScript
      </h1>
    </header>
  );
}
