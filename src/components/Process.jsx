import React from "react";
import { RiNumber1 } from "react-icons/ri";

const steps = [
  {
    id: 1,
    step: "STEP 1",
    title: "Discover Tech",
    description:
      "Explore internships across various technologies that align with your career goals. Start your journey by selecting a field that excites you.",
  },
  {
    id: 2,
    step: "STEP 2",
    title: "Evaluate Skill",
    description:
      "Our process includes an interview and a short evaluation task to assess your skills and readiness, helping us match you with the right opportunity.",
  },
  {
    id: 3,
    step: "STEP 3",
    title: "Track Record",
    description:
      "Once selected, gain access to our iPortal to monitor your internship progress, track your achievements, and stay on top of your goals.",
  },
];

const Process = () => {
  return (
    <div className=" px-3 lg:px-24 mt-20">

<div className=" lg:text-5xl text-3xl lg:space-y-5  font-bold  text-center p-5">
    <p >
        Shaping and Empowering Future IT Talent
      </p>
<p> Through a Seamless Process</p>
</div>

  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:grid-cols-3 px-3 py-10">
        {steps.map((step) => (
          <div key={step.id} className="relative p-3  lg:px-6 text-gray-800">
            <div className=" flex flex-col justify-center">
              <div className=" w-2/3">
                <p className="text-sm uppercase text-gray-200 font-semibold tracking-wide">
                  {step.step}
                </p>
                <h2 className=" text-3xl lg:text-5xl font-extrabold mt-2 leading-tight text-gray-900">
                  {step.title}
                </h2>
              </div>

              <h1 className="absolute top-[-20%] right-0 text-[150px] lg:text-[200px] text-gray-300 font-bold opacity-50">
                {step.id}
              </h1>
            </div>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              {step.description}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
