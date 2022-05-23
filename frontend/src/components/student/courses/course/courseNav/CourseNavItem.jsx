import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

export default forwardRef((props, ref) => {
   return (
      <Link to={props.path}>
         <div
            className={
               "flex relative course-nav-item pl-0 xl:pl-12 items-center justify-center h-full px-2 sm:px-4 lg:px-6 tracking-wide cursor-pointer gap-x-3 z-10 " +
               (props.active
                  ? "text-indigo-500"
                  : "hover:text-gray-500 text-gray-300")
            }
            onClick={props.click}
            ref={ref}
         >
            <SVG
               className="absolute left-0 hidden ml-5 transform scale-75 fill-current xl:flex"
               src={`/src/assets/icons/${
                  props.icon ? props.icon : "dashboard"
               }.svg`}
            />
            {props.label.toUpperCase()}
         </div>
      </Link>
   );
});
