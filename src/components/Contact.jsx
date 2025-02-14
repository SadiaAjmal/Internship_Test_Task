import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";

const apps_info = [
  { id: 1, message: "Follow us on LinkedIn", icon: FaLinkedinIn },
  { id: 2, message: "Follow us on Instagram", icon:FaInstagram },
  { id: 3, message: "Follow us on Facebook", icon: TiSocialFacebook },
  { id: 4, message: "Whatsapp Channel", icon: FaWhatsapp },
];

const Contact = () => {
  return (
    <div className=" lg:px-24 px-2">
      <div className=" grid grid-cols-2 lg:gap-14 lg:grid-cols-4 px-1 py-10">
        {apps_info.map((app) => (
          <div
            key={app.id}
            className="hover:scale-105 focus:scale-105 duration-200 rounded-lg p-2 flex flex-col items-center justify-center space-y-2 text-gray-800"
          >
            <p className=" my-5 bg-indigo-950 md:h-16 md:w-16 h-14 w-14 flex items-center justify-center rounded-md">
              <app.icon className=" text-4xl md:text-5xl text-white" />
            </p>
            <p className=" lg:text-lg  text-sm font-semibold">{app.message}</p>
            <p className=" lg:text-sm text-xs text-gray-500">Latest News and Updates</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
