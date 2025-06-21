const whatsappNumber = "+2349162439716";
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`;

// import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
// import { RiTwitterXLine } from "react-icons/ri";
import { PiFacebookLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
// import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row flex-1 bottom-0 justify-evenly h-full py-20 md:h-48 md:py-1 px-10 md:px-0">
      <a href="/" className="flex md:justify-center md:items-center md:flex-1">
        <img
          src="/logo-light.png"
          alt="Isaac Omolehin Ministries Logo"
          className="h-10 w-auto"
        />
      </a>
      <div className="flex items-start mt-10 md:items-center gap-8 md:mt-0 justify-center flex-col md:flex-row md:gap-16 md:flex-1">
        <div className="flex justify-center flex-col mt-4 md:mt-0">
          <p className="font-Inter text-white font-extrabold text-sm">
            Connect
          </p>
          <div className="pt-1.5 flex flex-row gap-2">
            <a href="https://www.instagram.com/isaac_omolehin_outreach/">
              <AiOutlineInstagram size={28} className="text-white" />
            </a>
            {/* <a href="https://twitter.com/">
              <RiTwitterXLine size={27} className="text-white" />
            </a> */}
            <a
              href="https://www.facebook.com/isaac.omolehin.2025" //web.facebook.com/
              target="_blank"
            >
              <PiFacebookLogo size={28} className="text-white" />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col md:mt-0">
          <p className="font-Inter text-white font-extrabold text-sm">
            Contact
          </p>
          <div className="pt-1.5 flex flex-col gap-1">
            {/* <a
              href="mailto:info@isaacomolehin.org"
              className="text-white text-sm font-Inter flex flex-row gap-1 items-center"
            >
              <MdOutlineAlternateEmail size={28} className="text-white" />
              <span>info@isaacomolehin.com</span>
            </a> */}
            <a
              href={whatsappLink}
              className="text-white text-sm font-Inter flex flex-row gap-1 items-center"
            >
              <FaPhoneVolume size={25} className="text-white" />
              <span>+234 916 243 9716</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <p className="font-Inter text-white font-extrabold text-sm">
            YouTube
          </p>
          <div className="pt-1.5 flex flex-row gap-2">
            <a
              href="https://youtube.com/@isaacomolehinevangelisticmin?si=ASk8gMk7wi9GPJPL"
              target="_blank"
            >
              <FiYoutube size={28} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
