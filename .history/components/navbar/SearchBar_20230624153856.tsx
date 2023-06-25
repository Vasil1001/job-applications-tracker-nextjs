import React from 'react'

export default function SearchBar() {
  return (
    <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              ></svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 border focus-visible:outline-none focus-visible:ring-1 focus:ring-gray-400 text-black bg-white border-gray-200 sm:text-sm rounded-md hover:border-gray-300 placeholder:text-gray-400 focus:placeholder:text-gray-500"
              placeholder="Search"
            />
          </div>
  )
}
