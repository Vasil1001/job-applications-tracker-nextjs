import { Search } from "lucide-react";
import React from "react";
import SearchBar from "./navbar/SearchBar";
import { BsFillMenuAppFill, BsAppIndicator, BsMenuApp} from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { HiOutlineQueueList }from "react-icons/hi2";
import {RiSendPlaneLine} from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
export default function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
            <BsFillMenuAppFill /> </div>
        <div className="flex gap-2.5">
          <SearchBar />
          <button className="py-2 px-4 text-black border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 ">
            User
          </button>
        </div>
      </div>

      <h1>
        Job Application tracker + shadcn + zustand + dnd + TanStack Table +
        Appwrite Cloud + TypeScript
      </h1>
    </div>
  );
}
