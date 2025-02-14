import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

<div className=" px-5 lg:px-20">
<hr />
    <div className=" py-10 flex lg:flex-row flex-col space-y-5 items-center justify-between">
      <p className=" text-gray-500">
        &copy; {currentYear}. Ezitech Institute. All rights reserved | Design &
        Develop by{" "}
        <span className=" hover:text-gray-800 cursor-pointer">
          Ezitech Solutions
        </span>
      </p>
      <ul className=" flex text-gray-500 lg:gap-10 gap-20">
        <li className=" cursor-pointer hover:text-gray-800">
          {" "}
          Terms & Conditions
        </li>
        <li className=" cursor-pointer hover:text-gray-800">Privacy Policy</li>
      </ul>
    </div>
</div>

  );
};

export default Footer;
