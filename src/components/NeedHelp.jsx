import React from "react";

const NeedHelp = () => {
  return (
    <div className=" px-3 py-10">
      <p className=" text-center text-gray-500">
        Still have a question? Browse
        <span className=" text-btn-bg-clr underline cursor-pointer">
          Documentation
        </span>{" "}
        or{" "}
        <span className=" text-btn-bg-clr underline cursor-pointer">
          {" "}
          Submit a ticket
        </span>
      </p>
    </div>
  );
};

export default NeedHelp;
