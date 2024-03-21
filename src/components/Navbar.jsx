import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 z-auto">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center">
          <img
            src="/src/assets/logo-dark.png"
            alt="Logo"
            className="h-8 w-auto mr-4"
          />
        </div>
        {/* Hamburger menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-black"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
              />
            </svg>
          </button>
        </div>
        {/* Navbar menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-700 font-Inter text-sm hover:text-black"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 font-Inter text-sm hover:text-black"
          >
            About
          </a>
          <a
            href="/ministry"
            className="text-gray-700 font-Inter text-sm hover:text-black"
          >
            Ministry
          </a>
          <a
            href="/media"
            className="text-gray-700 font-Inter text-sm hover:text-black"
          >
            Media
          </a>
          <a
            href="/contact"
            className="text-gray-700 font-Inter text-sm hover:text-black pl-4"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="/" className="block text-black">
            Home
          </a>
          <a href="/about" className="block text-black">
            About
          </a>
          <a href="/ministry" className="block text-black">
            Ministry
          </a>
          <a href="/media" className="block text-black">
            Media
          </a>
          <a href="/contact" className="block text-black">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
