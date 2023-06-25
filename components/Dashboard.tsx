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
import JobChartsTab from "./JobChartsTab";
import Board from "./Board";

export default function Header() {
  return (
    <header className="px-7 xl:w-9/12 2xl:w-7/12 w-full mx-auto">
      {/* <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-sky-500 to-[#0046af] rounded-md filter blur-3xl opacity-20 -z-50"></div> */}

      <Navbar />
      <JobChartsTab />
      <Board />
    </header>
  );
}
