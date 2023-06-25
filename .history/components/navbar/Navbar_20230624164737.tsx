import React from 'react'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <div className="flex">
        <div className="flex items-center font-bold text-3xl">
          <IoIosApps size={40} className="mr-3" />
          <span className="text-gray-800 hidden sm:block">Job Tracker</span>
        </div>
        <SearchBar />

    </div>
  )
}
