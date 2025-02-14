import React from "react";

const Updates = () => {
  return (
    <div className="lg:p-20 py-20">
<hr />
      <div className=" px-5 text-gray-500 space-y-8 flex lg:flex-row flex-col items-center justify-between">
        <div className=" w-full lg:w-[20%] h-auto space-y-5 flex flex-col lg:mt-24 justify-center">
          <p className=" pt-10">Office #304-B، Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab</p>
          <p>(92) 337-7777860</p>
          <p>
            <a
              href="https://ezitech.org/"
              target="blank"
              className=" text-gray-800"
            >
              info@ezitech.org
            </a>
          </p>
        </div>

        <div className=" flex lg:w-[60%] w-full lg:justify-evenly items-center justify-between">
          <div className="  lg:w-1/4">
            <ul className=" leading-loose">
              <h3 className=" text-2xl text-gray-800 font-bold my-8 leading-loose ">
                Explore More
              </h3>
              <li>
                {" "}
                <a href="/">About Us</a>
              </li>
              <li>
                {" "}
                <a href="/">Parteners</a>
              </li>
              <li>
                {" "}
                <a href="/">Portfolio</a>
              </li>
              <li>Carrers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="  lg:w-1/4">
            <ul className="  leading-loose">
              <h3 className=" text-2xl text-gray-800 font-bold my-8 leading-loose">
                InternShips
              </h3>
              <li>Strategy</li>
              <li>eCommerce</li>
              <li>Digital Marketing</li>
              <li>Branding</li>
              <li>Design</li>
            </ul>
          </div>
        </div>
        <div className=" w-full lg:w-1/4 flex flex-col lg:items-start items-center space-y-5 ">
          <h3 className=" text-2xl text-gray-800 font-bold my-8">Updates</h3>
          <p>Subscribe our newsletter to get the latest news & updates.</p>
          <div className=" h-14 relative flex overflow-hidden">
            <input
              className=" p-4 text-gray-600 outline-none bg-gray-50 rounded-sm"
              type="text"
              placeholder="Enter email address"
            />
            <button
              className=" absolute right-[0px] bg-gray-100 py-4 px-8 lg:p-4 text-gray-800 rounded-sm"
              type="submit"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
