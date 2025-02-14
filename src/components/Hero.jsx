import React from "react";

import heroBg from "../assets/hero.jpg"
import { IoMdHeart } from "react-icons/io";

import AnimatedText from "./AnimatedText";
import SearchBar from "./SearchBar";

const Hero = () => {


  return (
    <div
      className=" text-white z-0 px-3 hero lg:h-screen h-96 flex flex-col space-y-7 lg:space-y-10 justify-center items-center overflow-y-auto top-0  bg-no-repeat bg-center 
      bg-gradient-to-b from-[rgba(0,50,150,0.8)] to-[rgba(0,30,100,0.8)] "
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 50, 100, 0.8), rgba(0, 30, 100, 0.8)), url(${heroBg})`,
      }}
    >



      <AnimatedText />

      <SearchBar />

      <div className=" text-sm flex items-center justify-center lg:text-xl">
        <p>Explore our more useful Products </p>
        <IoMdHeart />
      </div>


    </div>
  );
};

export default Hero;
