import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("naira");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = () => {
    setPopup(!popup);
    setIsOpen(!isOpen);
  };

  const handleCurrencyToggle = () => {
    setCurrency(currency === "naira" ? "dollar" : "naira");
  };

  const navigateSelar = () => {
    window.open("https://selar.co/m/isaac-omolehin1", "_blank");
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    let convertedAmount;

    if (currency === "naira") {
      convertedAmount = parseFloat(value) * 100; // 1 Naira = 100 Kobo
    } else {
      convertedAmount = parseFloat(value) * 100; // 1 Dollar = 100 Cent
    }

    setAmount(convertedAmount.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="bg-white p-4 relative z-40">
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
              {isOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
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
              href="/gallery"
              className="text-gray-700 font-Inter text-sm hover:text-black"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-gray-700 font-Inter text-sm hover:text-black"
            >
              Contact
            </a>
            <button
              onClick={openPopup}
              className="text-white ml-10 font-Inter text-sm hover:text-black py-2 px-6 rounded-md bg-black hover:bg-white hover:border-black border-2 border-black transition duration-150 ease-in-out"
            >
              Giving
            </button>
            <button
              onClick={() => {
                navigateSelar();
              }}
              className="hover:text-white ml-10 font-Inter text-sm text-black py-2 px-6 rounded-md hover:bg-black bg-white hover:border-black border-2 border-black transition duration-150 ease-in-out"
            >
              Books
            </button>
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
            <a href="/gallery" className="block text-black">
              Gallery
            </a>
            <a href="/contact" className="block text-black">
              Contact
            </a>
            <button
              onClick={openPopup}
              className="text-white block mt-4 font-Inter text-sm hover:text-black py-2 px-6 rounded-md bg-black hover:bg-white hover:border-black border-2 border-black transition duration-150 ease-in-out"
            >
              Donate
            </button>
            <button
              onClick={() => {
                navigateSelar();
              }}
              className="hover:text-white block mt-4 font-Inter text-sm text-black py-2 px-6 rounded-md hover:bg-black bg-white hover:border-black border-2 border-black transition duration-150 ease-in-out"
            >
              Shop
            </button>
          </div>
        )}
      </nav>
      {popup && (
        <>
          <div className="bg-black opacity-80 absolute z-30 w-full h-full"></div>
          <div className="flex flex-col absolute z-40 justify-center w-full h-full items-center">
            <form
              className="bg-white rounded-3xl w-[90vw] sm:w-[80vw] md:w-[40vw] flex flex-col px-8 py-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row justify-between">
                <p className="mb-5 mt-8 font-Inter font-bold text-base">
                  kindly fill this form to make your donations:
                </p>
                <button onClick={() => setPopup(false)} className="-mt-16">
                  <IoClose
                    size={25}
                    className="bg-black text-white rounded-full hover:bg-red-600"
                  />
                </button>
              </div>
              <label
                htmlFor="email"
                className="text-black font-Inter mb-2 font-medium text-sm"
              >
                Valid Email Address <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g email@email.com"
                required
                className="border border-black rounded-md text-black py-2 px-2 font-Inter text-sm mb-6"
              />
              <label
                htmlFor="phone"
                className="text-black font-Inter mb-2 font-medium text-sm"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g +1 (904) 234555"
                className="border border-black rounded-md text-black py-2 px-2 font-Inter text-sm mb-6"
              />
              <label
                htmlFor="amount"
                className="text-black font-Inter font-medium text-sm"
              >
                Desired Amount <span className="text-red-700">* </span>
                <span
                  onClick={handleCurrencyToggle}
                  className="cursor-pointer text-white font-Inter font-medium text-sm bg-black rounded-md px-1 py-1"
                >
                  switch currency to {currency === "naira" ? "$" : "₦"}
                </span>
              </label>
              <p className="text-[10px] mb-2">
                Greater than {currency === "naira" ? "₦1000" : "$5"}
              </p>
              <input
                type="number"
                name="amount"
                id="amount"
                onChange={handleAmountChange}
                placeholder="e.g 400000"
                required
                className="border border-black rounded-md text-black py-2 px-2 font-Inter text-sm mb-6"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 mx-auto mt-5 rounded-md hover:bg-white hover:border-2 hover:border-black hover:text-black"
              >
                Donate
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
