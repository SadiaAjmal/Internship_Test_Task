import React from "react";

const GetStarted = () => {
  return (
    <div className="lg:p-20 px-5 py-10">
      <div className=" bg-white box-border shadow-lg lg:p-20 px-5 py-10 w-full rounded-lg flex lg:flex-row flex-col items-center justify-between space-y-5">
        <div className="  lg:w-2/3 leading-loose text-gray-500 text-lg">
          <h1 className=" font-bold lg:text-6xl text-4xl text-center mb-10 text-gray-700">Ready to get started?</h1>
          <p>
            At Ezitech, we constantly push boundaries to deliver excellence.
          </p>
          <p>
            Our commitment to quality and innovation makes us your trusted
            partner for growth and success.
          </p>
        </div>
        <button className=" bg-btn-bg-clr text-white p-5 rounded-full hover:bg-blue-800 shadow-2xl shadow-red-100 hover:shadow-blue-100">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
