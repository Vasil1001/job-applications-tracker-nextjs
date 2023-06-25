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
import JobChartsTab from "./ui/JobChartsTab";

export default function Header() {
  return (
    <header className="">
        div.flex.flex-col
      <Navbar />

      <JobChartsTab />
      <h1>
        Job Application tracker + shadcn + zustand + dnd + TanStack Table +
        Appwrite Cloud + TypeScript
      </h1>
    </header>
  );
}
