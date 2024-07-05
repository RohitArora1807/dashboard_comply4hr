import React from "react";
import { BellIcon, UserCircleIcon, MenuIcon } from '@heroicons/react/outline';

const Navbar = ({ open, setOpen }) => {
  return (
    
    <div className={`flex items-center justify-between px-5 py-3 bg-gray-800 text-white `}>
      <h1 className={`text-xl font-bold ml-20 `}>
        ORGANISATION COMPLIANCE OVERVIEW
      </h1>
      <div className={`flex items-center space-x-4 `}>
        <BellIcon className={`h-6 w-6 cursor-pointer `} />
        <UserCircleIcon className={`h-8 w-8 cursor-pointer `} />
        
      </div>
    </div>
    
  );
};

export default Navbar;
