import React from "react";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Header = () => {
  return (
    <div className=" hidden px-32 py-4 lg:flex items-center justify-between w-full text-white absolute">
      <div>
        <ul className="text-sm flex justify-center items-center space-x-5">
          <div className=" flex items-center justify-center space-x-2 cursor-pointer">
            <HiPhone />
            <li>+923455555396</li>
          </div>

          <div className=" flex items-center justify-center space-x-2 cursor-pointer">
            <MdEmail />
            <li>INFO@EZTECH.ORG</li>
          </div>
          <div className=" flex items-center justify-center space-x-2 cursor-pointer">
            <FaLocationDot />
            <li>
              WESTRIGE 1, OFFICE #304-G PESHAWAR ROAD, RAWALPINDI, PAKISTAN
            </li>
          </div>
        </ul>
      </div>

      <div>
        <ul className="flex space-x-2 justify-center items-center">
          <li>
            <RiFacebookFill className=" h-5 w-5 cursor-pointer" />
          </li>
  
          <li>
            <IoLogoInstagram className=" h-5 w-5 cursor-pointer" />
          </li>

          <li>
            <FaBehance className=" h-5 w-5 cursor-pointer" />
          </li>

          <li>
            <FaLinkedinIn className=" h-5 w-5 cursor-pointer" />
          </li>

          <li>
            <FaYoutube className=" h-5 w-5 cursor-pointer" />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
