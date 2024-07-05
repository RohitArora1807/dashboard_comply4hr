import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar onToggle={handleSidebarToggle} />
      
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10 pointer-events-none" />
      )}

      <div className={`flex-1 overflow-y-auto bg-gray-200 transition-all duration-300 ${sidebarOpen ? 'opacity-50' : 'opacity-100'}`}>
        <Navbar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="p-4 flex space-x-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
