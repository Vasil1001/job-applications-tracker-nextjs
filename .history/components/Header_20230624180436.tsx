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
      <Navbar/>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl w-fit bg-white italic max-w-3xl text">
            <UserCircleIcon className=" inline-block h-10 w-10 mr-1" />
        </p>
      </div>
      <h1>
        Job Application tracker + shadcn + zustand + dnd + TanStack Table +
        Appwrite Cloud + TypeScript
      </h1>
    </header>
  );
}
