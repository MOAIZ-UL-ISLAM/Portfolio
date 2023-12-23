import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

export const ToggleButton = () => {
  return (
    <div className="flex justify-center items-center w-12 h-12 
     cursor-pointer bg-slate-400 rounded-[50%] right-16 bottom-14 fixed ">
      {/* <div className=" ">
        <FaMoon />
      </div> */}
      <div className="">
      <FaRegSun />
      </div>
    </div>
  );
};
