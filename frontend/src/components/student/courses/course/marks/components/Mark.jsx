import React from "react";

export default props => {
   return (
      <div className="flex p-4">
         <div className="flex items-center justify-center">
            <h2 className="text-5xl font-bold font-ff">
               {props.mark}
               <span className="text-lg text-gray-400">
                  {"/ " + props.total}
               </span>
            </h2>
         </div>
         <div className="flex flex-col items-end flex-1 font-semibold text-gray-800">
            <div>{"Avg: " + props.average}</div>
            <div>{"Min: " + props.min}</div>
            <div>{"Max: " + props.max}</div>
            <div>{"Wtg: " + props.weightage}</div>
         </div>
      </div>
   );
};
