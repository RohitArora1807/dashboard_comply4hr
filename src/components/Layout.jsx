import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="flex">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className="flex-1">
      <Navbar isOpen={menuOpen} onToggle={handleMenuToggle} />
      
        <div className="p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
