import React from "react";
import { MenuIcon, HomeIcon, ChatAltIcon, UserCircleIcon, CalendarIcon, SearchIcon, CogIcon, FolderIcon, BellIcon } from "@heroicons/react/solid";

export function Navbar({ isOpen, onToggle }) {
  return (
    <div className="flex items-center justify-between px-5 h-[8vh] tablet:h-16 bg-gray-800 text-white w-screen">
      <h1 className=" font-montserrat  phone:text-xs tablet:text-xl laptop:text-2xl desktop:text-3xl font-bold phone:ml-auto tablet:ml-16 laptop:ml-16 desktop:ml-16">
        ORGANISATION COMPLIANCE OVERVIEW
      </h1>
      <div className="flex items-center space-x-4">
        <div className="relative mobile:block tablet:hidden laptop:hidden desktop:hidden">
          <MenuIcon className="h-6 w-6 cursor-pointer" onClick={onToggle} />
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
              isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
            }`}
          >
            <ul className="py-1">
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <HomeIcon className="h-5 w-5 mr-2" />
                <span>Home</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <ChatAltIcon className="h-5 w-5 mr-2" />
                <span>Messages</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <UserCircleIcon className="h-5 w-5 mr-2" />
                <span>Profile</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>Calendar</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <SearchIcon className="h-5 w-5 mr-2" />
                <span>Search</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <CogIcon className="h-5 w-5 mr-2" />
                <span>Settings</span>
              </li>
              <li className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
                <FolderIcon className="h-5 w-5 mr-2" />
                <span>Files</span>
              </li>
            </ul>
          </div>
        </div>
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <UserCircleIcon className="h-8 w-8 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
