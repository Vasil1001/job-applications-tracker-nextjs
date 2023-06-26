import React from "react";
import SearchBar from "./SearchBar";
import { IoIosApps } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import ProfileDropdown from "./ProfileDropdown";
import { useBoardStore } from "@/store/BoardStore";

export default function Navbar() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ])

  return (
    <div className="pt-7 transition-all ">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#dddddd] to-[#dae0e0] rounded-md filter blur-xl opacity-50 -z-50"></div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center transition-all ">
          {/* <Navbar /> */}
          {/* <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        /> */}
          {/* Logo */}
          <div className="flex items-center font-bold text-3xl hover:p-1 hover:px-4 hover:transition-all delay-150 duration-300 ease-in-out hover:bg-white hover:rounded-lg hover:cursor-pointer  mb-3 md:mb-0">
            <IoIosApps size={40} className="mr-3 " />
            <span className="text-black">Job Tracker</span>
          </div>

          {/* Search input, button and profile */}
          <div className="flex items-center flex-1 justify-end w-full">
            <form className=" flex items-center justify-center  flex-1 md:flex-initial transition-all">
              <div className="relative  flex-1 md:flex-initial">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiMagnifyingGlass className="w-6 h-6 text-gray-400" />
                </span>
                <div className="flex gap-3.5 h-full">
                  <input
                    type="text"
                    className="w-full flex-1 h-full py-2.5 pl-10 pr-4 border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-300 text-sm rounded-lg hover:border-gray-400 placeholder:text-gray-400 focus:placeholder:text-gray-500"
                    placeholder="Search"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                  />

                  <ProfileDropdown />
                </div>
              </div>
              <button hidden> Search</button>
            </form>
          </div>
        </div>

        <div className="flex w-full flex-1 md:justify-end mt-3.5">
          <p className="flex flex-1 items-center justify-center text-sm font-light pr-5 shadow-sm rounded-lg p-5 w-fit bg-white italic border border-gray-300 hover:border-gray-300">
            <UserCircleIcon className=" inline-block h-10 w-10 mr-1" />
            GPT is summarizing your daily job applications
          </p>
        </div>
      </div>
    </div>
  );
}
