import React from "react";
import pic1 from "../assets/sem1.webp";
import pic2 from "../assets/sem2.webp";
import pic3 from "../assets/sem3.webp";

const Work = () => {
  return (
    <div className=" lg:h-[130vh] relative lg:flex-row flex-col flex py-20 items-end justify-between lg:px-20 px-5 gap-24">
      <div className=" flex-1 hidden lg:flex items-end justify-center">
        <img
          className=" shadow-2xl absolute top-0 left-0 w-96 rounded-lg"
          src={pic1}
          alt=""
        />{" "}
        <img
          className="shadow-2xl absolute top-14 h-72 right-[45%] rounded-lg"
          src={pic3}
          alt=""
        />
        <img className="shadow-2xl z-10 rounded-lg w-96" src={pic2} alt="" />
      </div>

      <div className=" w-full lg:w-[40%] space-y-5 text-gray-500">
        <p className=" text-sm text-blue-500 w-fit bg-blue-100 px-5 py-2 rounded-full">
          What we do...?
        </p>
        <h2 className=" text-4xl font-bold text-gray-700 leading-relaxed">
          Empowering Connections in the Digital World
        </h2>

        <p className=" font-semibold">
          We equip future professionals with the essential tools to thrive in
          both traditional and digital IT landscapes.
        </p>

        <p className=" text-lg">
          With years of experience and countless successful placements, Ezitech
          Institute has perfected a unique learning process that goes beyond
          theory. We delve deep into practical skills and real-world
          applications, helping students understand, connect, and excel in the
          ever-evolving tech market.
        </p>

        <div className=" py-10">
          <button className=" uppercase font-semibold bg-btn-bg-clr text-white px-8 py-5 rounded-full focus:bg-blue-800 hover:bg-blue-800 shadow-2xl shadow-red-100 focus:shadow-blue-100 hover:shadow-blue-100">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
