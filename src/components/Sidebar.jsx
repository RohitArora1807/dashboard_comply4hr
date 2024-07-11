import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  ChatAltIcon,
  UserCircleIcon,
  CalendarIcon,
  SearchIcon,
  CogIcon,
  FolderIcon,
} from "@heroicons/react/solid";

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
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleMouseLeave}
      ></div>

      <div
        className="flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${
            open
              ? "w-1/3 tablet:w-1/3 laptop:w-1/6 desktop:w-1/6"
              : "w-16 tablet:w-14"
          } bg-gray-900 h-screen p-3 pt-8 fixed duration-300 shadow-lg z-20 hidden mobile:block`}
        >
          {/* Toggle Button */}
          <button
            className="absolute cursor-pointer -right-3 top-9 w-7 border-gray-800 border-2 rounded-full flex items-center justify-center bg-white z-10"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-gray-800" />
            )}
          </button>

          <div className="flex items-center justify-center gap-x-2 mb-6">
            <HomeIcon
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              } text-white h-[5vh] w-[4vw]`}
            />
            <h1
              className={`text-white font-bold text-sm md:text-l lg:text-xl transition-opacity ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              Dashboard
            </h1>
          </div>
          <ul className="pt-6 space-y-2">
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <HomeIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Home</span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <ChatAltIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Messages</span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <UserCircleIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Profile</span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <CalendarIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Calendar</span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <SearchIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Search</span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <CogIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Settings</span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-gray-800 text-gray-300 text-xs md:text-sm lg:text-base items-center gap-x-4">
              <FolderIcon className="origin-left duration-200 h-5 w-5" />
              <span className={`${open ? "ml-2" : "hidden"}`}>Files</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
