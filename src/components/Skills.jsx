import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiVintageRobot } from "react-icons/gi";
import { TbDeviceMobileCog } from "react-icons/tb";
import { FaPenNib } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";

const skills = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic",
    bgColor: "bg-pink-50",
    iconColor: "text-blue-300",
  },

  {
    id: 2,
    icon: GiVintageRobot,
    title: "Artificile Intelligence",
    description:
      "Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-300",
  },

  {
    id: 3,
    icon: TbDeviceMobileCog,
    title: "App Development",
    description:
 "We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-200",
  },

  {
    id: 4,
    icon: FaPenNib,
    title: "Graphic Design",
    description:
      "We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logi",
    bgColor: "bg-blue-100",
    iconColor: "text-gray-700",
  },

  {
    id: 5,
    icon: FaComputer,
    title: "2D/3D Architecture",
    description:
      "We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic",
    bgColor: "bg-amber-50",
    iconColor: "text-lime-500",
  },

  {
    id: 6,
    icon:FaMapMarkedAlt ,
    title: "Digital Marketing",
    description:
      "We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic",
    bgColor: "bg-lime-50",
    iconColor: "text-pink-300",
  },

];

const Skills = () => {
  return (
    <div className=" lg:px-20 px-5 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 bg gap-14 lg:grid-cols-3 px-3 py-20">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`p-3 ${skill.bgColor}  shadow-lg box-border hover:scale-105 focus:scale-105 duration-75 rounded-lg p-6 space-y-5 text-gray-800`}
          >
            <p>
              <skill.icon className={`text-5xl ${skill.iconColor} `} />
            </p>
            <p className=" text-3xl font-semibold">{skill.title}</p>
            <p className=" text-gray-500 leading-relaxed text-sm">
              {skill.description}
            </p>

            <div className=" flex justify-center items-center gap-1">
              <button className=" font-semibold">Explore Landings</button>
              <IoIosArrowRoundForward className=" text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
