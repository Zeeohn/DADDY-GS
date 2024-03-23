import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 z-auto">
      <div className="flex items-center justify-between md:justify-evenly">
        <a href="/" className="flex items-center ">
          <img
            src="/logo-dark.png"
            alt="Isaac Omolehin Ministries Logo"
            className="h-8 w-auto mr-4"
          />
        </a>
        {/* Hamburger menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-black transition duration-150 ease-in-out"
          >
            {isOpen ? ( // Render different SVG icon based on isOpen state
              <IoClose size={25} />
            ) : (
              <IoMenu size={25} />
            )}
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
      {isOpen && <hr className="md:hidden border-black mt-4" />}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col justify-center items-center gap-4">
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
