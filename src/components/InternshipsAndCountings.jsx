import React from "react";
const stats = [
  { id: 1, value: "37+", label: "Industry MoUs" },
  { id: 2, value: "327", label: "Active Students" },
  { id: 3, value: "98%", label: "Positive Feedback" },
  { id: 4, value: "6,663", label: "Successful Graduates" },
];

const InternshipsAndCountings = () => {
  return (
    <div className=" lg:mx-20 lg:p-20 p-5 flex lg:gap-20 gap-5 lg:flex-row flex-col justify-between items-center">
      <div className=" lg:w-[40%]">
        <h1 className=" lg:text-left text-center lg:text-5xl text-3xl font-extrabold text-gray-900 leading-tight">
          Hundreds of <br /> Successful Internships & 
          <span className=""> Countings</span>
        </h1>
        <p className="mt-6 text-gray-500 text-lg leading-relaxed">
          With a commitment to quality training and career advancement, we've
          empowered students from diverse backgrounds. Through structured
          Internship, hands-on projects, and expert mentorship, Ezitech
          Institute ensures that every student builds a solid foundation in IT.
        </p>
      </div>

      <div className="lg:w-[45%] w-full  grid lg:grid-cols-2 grid-cols-1  shadow-2xl rounded-lg ">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center p-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">{stat.value}</h2>
            <p className="text-gray-500 text-lg mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
<hr />
    </div>
  );
};

export default InternshipsAndCountings;
