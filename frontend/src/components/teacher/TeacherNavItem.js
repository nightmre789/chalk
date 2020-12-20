import React from "react";
import SVG from "react-inlinesvg";

export default _ => (
   <div className="flex flex-col items-center justify-center py-4 pl-6 pr-4 text-lg font-semibold text-center duration-500 cursor-pointer group lg:flex-row rounded-r-xl lg:text-left lg:gap-x-3 text-gray-cool-900">
      <SVG
         src={require("../../assets/icons/courses.svg")}
         className="z-10 fill-current"
      />
      <p className="z-10 flex-1 mt-1 font-ff">My Courses</p>
   </div>
);
