"use client";
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
import Avatar from "react-avatar";

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
        <div className="flex items-center font-bold text-3xl mb-3 md:mb-0">
          <IoIosApps size={40} className="mr-3" />
          <span className="text-gray-800">Job Tracker</span>
        </div>

        {/* Search input, button and profile */}
        <div className="flex items-center gap-3 flex-1 justify-end w-full">
          <form className=" flex items-center justify-center  flex-1 md:flex-initial">
            <div className="relative  ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiMagnifyingGlass className="w-6 h-6 text-gray-400" />
              </span>

              <input
                type="text"
                className="w-full flex-1  h-full py-2 pl-10 pr-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-200 text-sm rounded-md hover:border-gray-300 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                placeholder="Search"
              />
            </div>
            <button hidden> Search</button>
          </form>

          <button className="p-2 px-3 text-black text-sm font-regular border outline-none focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 bg-white border-gray-200 text-sm rounded-md hover:border-gray-300 ">
            VD
          </button>
        </div>

        {/* <Avatar name="Vasilis Dzhakov" round color="#ffffff" size="50" fgColor='black' /> */}
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
