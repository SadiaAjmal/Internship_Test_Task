import React, { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" z-20 lg:absolute lg:top-16 ">
      <nav>
        <div className=" lg:flex hidden fixed mx-28 py-5 bg-white left-0 right-0 opacity-85 h-20  box-border items-center  justify-between  p-5 rounded-lg">
          <img className=" cursor-pointer h-12" src={logo} alt="EZITECH" />

          <ul className=" flex cursor-pointer items-center justify-center space-x-5">
            <li className=" hover:text-btn-bg-clr">
              {" "}
              <Link to="/">HOME</Link>
            </li>

            <li className=" hover:text-btn-bg-clr">
              {" "}
              <Link to="/about">About</Link>
            </li>

            <li className=" hover:text-btn-bg-clr">
              {" "}
              <Link to="/internships">INTERNSHIP's</Link>
            </li>

            <li className=" hover:text-btn-bg-clr">
              {" "}
              <Link to="carrers">CARRERS</Link>
            </li>

            <li className=" hover:text-btn-bg-clr">
              {" "}
              <Link to="courses">COURSES</Link>
            </li>

            <li className=" hover:text-btn-bg-clr">
              {" "}
              <Link to="/blogs">TECH BLOGS</Link>
            </li>
          </ul>

          <button className=" bg-btn-bg-clr text-white p-3 text-xs rounded-full">
            IPORTAL LOGIN
          </button>
        </div>

        {/* ______________________________ Responsive Navbar______________________________*/}

        <div className=" top-0 fixed w-full px-4 py-2 h-16 lg:hidden flex items-center justify-between bg-white">
          <button className=" font-semibold bg-btn-bg-clr text-white p-3 text-xs rounded-full">
            IPORTAL LOGIN
          </button>

          <img className=" w-28" src={logo} alt="" />

          <ul
            className={` z-10 h-screen bg-black text-white text-center duration-500  space-y-10 w-[70%] shadow-lg py-5 fixed top-16 ${
              toggle ? "right-[0]" : "right-[-100%]"
            }`}
          >

            <li className=" hover:text-btn-bg-clr focus:text-btn-bg-clr">
              {" "}
              <Link to="/">HOME</Link>
            </li>

            <li className=" hover:text-btn-bg-clr focus:text-btn-bg-clr">
              {" "}
              <Link to="/about">About</Link>
            </li>

            <li className=" hover:text-btn-bg-clr focus:text-btn-bg-clr">
              {" "}
              <Link to="/internships">INTERNSHIP's</Link>
            </li>

            <li className=" hover:text-btn-bg-clr focus:text-btn-bg-clr">
              {" "}
              <Link to="carrers">CARRERS</Link>
            </li>

            <li className=" hover:text-btn-bg-clr focus:text-btn-bg-clr">
              {" "}
              <Link to="courses">COURSES</Link>
            </li>

            <li className=" hover:text-btn-bg-clr focus:text-btn-bg-clr">
              {" "}
              <Link to="/blogs">TECH BLOGS</Link>
            </li>

          </ul>

          <div className=" cursor-pointer">
            {toggle ? (
              <IoClose onClick={menu} className=" p-1 rounded-full h-8 w-8" />
            ) : (
              <IoMenuOutline
                onClick={menu}
                className="  h-8 w-8 p-1 rounded-full"
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
