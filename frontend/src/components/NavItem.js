import React from "react";
import SVG from "react-inlinesvg";

export default props => {
   return (
      <li
         className={
            "group flex items-center justify-center w-auto px-4 py-4 rounded-xl md:gap-x-2 lg:gap-x-4 font-semibold" +
            (props.active ? " text-white bg-pink-600" : " text-gray-500")
         }
      >
         <SVG
            src={require("../assets/icons/" +
               (props.icon ? props.icon : "dashboard") +
               ".svg")}
            className="fill-current group-hover:text-pink-500"
         />
         <a href="##" className="flex-1 group-hover:text-pink-500">
            {props.label}
         </a>
      </li>
   );
};
