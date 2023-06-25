import { Search } from "lucide-react";
import React from "react";
import SearchBar from "./navbar/SearchBar";
import { IoIosApps } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between">
        {/* <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        /> */}
        <div className="flex items-end font-extrabold text-xl">
          <IoIosApps size={40} />
          Job Tracker
        </div>
        <div className="flex gap-2.5">
          {/* <SearchBar /> */}
          <button className="py-2 px-4 text-black border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 ">
            User
          </button>
        </div>
      </div>

      <form className="flex justify-between"></form>

      <h1>
        Job Application tracker + shadcn + zustand + dnd + TanStack Table +
        Appwrite Cloud + TypeScript
      </h1>
    </header>
  );
}
