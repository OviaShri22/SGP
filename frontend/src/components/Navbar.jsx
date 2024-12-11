import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-[#eefab8]fixed top-0 left-0 w-full bg-blue-300 shadow-md z-50 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/donor" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Donate</Link>
                <Link to="/recipient" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Request</Link>
                <Link to="/services" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link to="/blog" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                <Link to="/about" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">About us</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Link to="/signup" className="text-white hover:bg-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium mr-3">Sign up</Link>
            <button type="button" className="bg-[#ffffff] p-1 rounded-full text-red-600 hover:text-purple-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-950">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.002 7.002 0 00-4-6.326V4a2 2 0 10-4 0v.674A7.002 7.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3.5 3.5 0 11-7 0h7z" />
              </svg>
            </button>
            <div className="ml-3 relative">
              <div>
                <button type="button" className="bg-[#ffffff] flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#eefab8] focus:ring-purple-950" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={toggleProfileMenu}>
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="/images/user.png" alt="" />
                </button>
              </div>
              {isProfileMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Your Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Settings</Link>
                  <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Sign out</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/donor" className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Donate</Link>
          <Link to="/recipient" className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Request</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
