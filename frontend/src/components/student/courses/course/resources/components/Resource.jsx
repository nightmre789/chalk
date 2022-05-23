import React from "react";
import SVG from "react-inlinesvg";

export default props => {
   return (
      <div className="flex flex-col h-64 px-10 py-8 bg-white resource-item hover:drop-shadow-lg drop-shadow-md gap-y-3 group">
         <div className="flex justify-end">
            <SVG
               className="transform rotate-90"
               src="/src/assets/icons/download.svg"
            />
         </div>
         <div className="flex flex-col justify-end flex-1">
            <div
               className={
                  "rounded-lg font-bold font-ff  text-center " +
                  (props.type === "PDF"
                     ? "bg-red-200 text-red-400"
                     : props.type === "Word Document"
                     ? "bg-blue-200 text-blue-400"
                     : "bg-gray-200 text-gray-400")
               }
            >
               {props.type}
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-none font-ff">
               {props.title}
            </h1>
            <p className="text-gray-600 ">{props.time + " ago"}</p>
         </div>
      </div>
   );
};
