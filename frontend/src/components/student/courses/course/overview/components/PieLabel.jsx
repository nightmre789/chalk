import React from "react";

export default props => {
   return (
      <text
         x="128"
         y="95"
         className="text-4xl font-bold text-gray-500 fill-current font-gilroy"
         textAnchor="middle"
      >
         <tspan x="128" dy="0.355em">
            {props.label}
         </tspan>
      </text>
   );
};
