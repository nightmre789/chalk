import React, { forwardRef } from "react";
import SVG from "react-inlinesvg";

export default forwardRef((props, ref) => {
   return (
      <div
         className={
            "flex items-center justify-center h-full px-4 tracking-wide cursor-pointer hover:text-indigo-500 gap-x-3 " +
            (props.active ? "text-indigo-500" : "text-gray-300")
         }
         onClick={props.click}
         ref={ref}
      >
         <SVG
            className="hidden fill-current xl:flex"
            src={require("../assets/icons/dashboard.svg")}
         />
         {props.label}
      </div>
   );
});
