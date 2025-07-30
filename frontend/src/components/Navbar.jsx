// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 flex items-center justify-between shadow-md">
      
      {/* Left section: JANTA VOICE + image */}
      <div className="flex items-center space-x-3">
        <img src="/images/preamble.png" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl font-extrabold tracking-wide">JANTA VOICE</h1>
      </div>

      {/* Right section: static page links */}
      <div className="flex space-x-6 text-sm font-medium">
        <Link to="/schemes" className="hover:underline">Schemes</Link>
        <Link to="/acts" className="hover:underline">Acts</Link>
        <Link to="/policies" className="hover:underline">Policies</Link>
        <Link to="/help" className="hover:underline">Help</Link>
      </div>
    </nav>
  );
};

export default NavBar;
