import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

export default forwardRef((props, ref) => (
   <Link to={props.path}>
      <li
         className={
            "duration-500 text-lg  group flex flex-col lg:flex-row pr-4 pl-6 justify-center items-center text-center py-4 rounded-r-xl font-semibold cursor-pointer lg:text-left lg:gap-x-3" +
            (props.active ? " text-gray-cool-900" : " text-gray-cool-500")
         }
         onClick={props.click}
         ref={ref}
      >
         <SVG
            src={require("../assets/icons/" +
               (props.icon ? props.icon : "dashboard") +
               ".svg")}
            className={
               "fill-current z-10 " +
               (props.active ? "" : " group-hover:text-indigo-500")
            }
         />
         <p
            className={
               "flex-1 font-ff z-10 mt-1" +
               (props.active ? "" : " group-hover:text-indigo-500")
            }
         >
            {props.label}
         </p>
      </li>
   </Link>
));
