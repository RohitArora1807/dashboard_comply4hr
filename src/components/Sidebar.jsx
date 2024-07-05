import React, { useState } from "react";
import { HomeIcon, ChatAltIcon, UserCircleIcon, CalendarIcon, SearchIcon, CogIcon, FolderIcon } from '@heroicons/react/solid';

const Sidebar = ({ onToggle }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!open) {
      setOpen(true);
      onToggle(true);
    }
  };

  const handleMouseLeave = () => {
    if (open) {
      setOpen(false);
      onToggle(false);
    }
  };

  return (
    <div
      className="flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          open ? "w-60" : "w-20"
        } bg-gray-900 h-screen p-5 pt-8 fixed duration-300 shadow-lg z-20`}
      >
        <div className="flex items-center justify-center gap-x-2 mb-6">
          <HomeIcon className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} text-white h-6 w-6`} />
          <h1
            className={`text-white font-bold text-xl transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6 space-y-2">
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <HomeIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Home
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <ChatAltIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Messages
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <UserCircleIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Profile
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <CalendarIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Calendar
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <SearchIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Search
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <CogIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Settings
            </span>
          </li>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm items-center gap-x-4">
            <FolderIcon className="origin-left duration-200 h-5 w-5" />
            <span className={`${open ? "ml-2" : "hidden"}`}>
              Files
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
