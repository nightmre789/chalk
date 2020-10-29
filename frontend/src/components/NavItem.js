import React from "react";
import SVG from "react-inlinesvg";

export default props => {
   return (
      <li
         className={
            "group flex flex-col lg:flex-row items-center justify-center w-auto px-4 text-center py-4 rounded-xl font-semibold cursor-pointer lg:text-left lg:gap-x-4" +
            (props.active ? " text-white bg-pink-600" : " text-gray-500")
         }
      >
         <SVG
            src={require("../assets/icons/" +
               (props.icon ? props.icon : "dashboard") +
               ".svg")}
            className={
               "fill-current" +
               (props.active ? "" : " group-hover:text-pink-600")
            }
         />
         <p
            className={
               "flex-1" + (props.active ? "" : " group-hover:text-pink-600")
            }
         >
            {props.label}
         </p>
      </li>
   );
};
