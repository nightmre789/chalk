import React from "react";

import CourseNav from "./CourseNav.js";
import Overview from "./Overview";
import Marks from "./Marks";
import Resources from "./Resources";

export default props => {
   return (
      <div className="pt-0 lg:pt-8 md:pt-6">
         <h1 className="-mb-4 text-6xl font-bold tracking-tight text-center text-indigo-500 font-ff md:text-left">
            {props.code.substring(0, 2) + "\xa0"}
            <span className="text-gray-800">
               {props.code.substring(2, props.code.length)}
            </span>
         </h1>
         <h3 className="mt-1 ml-1 text-lg font-bold tracking-wide text-center text-gray-700 md:text-left font-ff">
            {props.title}
            <span className="font-medium text-gray-500">
               {" - " + props.teacher + " | Section " + props.section}
            </span>
         </h3>
         <CourseNav />
         <Resources />
      </div>
   );
};
