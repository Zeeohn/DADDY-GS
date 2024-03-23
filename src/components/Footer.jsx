import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { PiFacebookLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row flex-1 bottom-0 justify-evenly h-full py-20 md:h-48 md:py-1">
      <div className="flex justify-center items-center md:flex-1">
        <img
          src="/src/assets/logo-light.png"
          alt="Isaac Omolehin Ministries Logo"
          className="h-10 w-auto"
        />
      </div>
      <div className="flex items-start md:items-center mt-10 gap-8 md:mt-0 justify-center mx-auto flex-col md:flex-row md:gap-16 md:flex-1">
        <div className="flex justify-center flex-col mt-4 md:mt-0">
          <p className="font-Inter text-white font-extrabold text-sm">
            Connect
          </p>
          <div className="pt-1 flex flex-row gap-2">
            <a href="https://instagram.com/">
              <AiOutlineInstagram size={25} className="text-white" />
            </a>
            <a href="https://twitter.com/">
              <RiTwitterXLine size={24} className="text-white" />
            </a>
            <a href="https://facebook.com/">
              <PiFacebookLogo size={25} className="text-white" />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <p className="font-Inter text-white font-extrabold text-sm">
            Contact
          </p>
          <div className="pt-1 flex flex-row gap-2">
            <a
              href="mailto:info@isaacomolehin.org"
              className="text-white text-base font-Inter"
            >
              info@isaacomolehin.com
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <p className="font-Inter text-white font-extrabold text-sm">
            Streams
          </p>
          <div className="pt-1 flex flex-row gap-2">
            <a href="https://youtube.com/">
              <FiYoutube size={25} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
