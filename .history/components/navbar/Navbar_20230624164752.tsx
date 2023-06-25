import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <div className="flex">
        <div className="flex items-center font-bold text-3xl">
          <IoIosApps size={40} className="mr-3" />
          <span className="text-gray-800 hidden sm:block">Job Tracker</span>
        </div>
        <div className="flex gap-4">
          <SearchBar />
          <button className="py-2 px-4 flex-initial text-black border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 ">
            User
          </button>
        </div>
      </div>

    </div>
  )
}
