import React from "react";
import SVG from "react-inlinesvg";

export default props => {
   return (
      <div className="flex flex-col h-64 px-10 py-8 bg-white resource-item hover:shadow-md gap-y-3 group">
         <div className="flex justify-end">
            <SVG
               className="transform rotate-90"
               src="/src/assets/icons/download.svg"
            />
         </div>
         <div className="flex flex-col justify-end flex-1">
            <div
               className={
                  "rounded-lg font-bold font-ff grou-hover:text-white " +
                  (props.type === "PDF"
                     ? "bg-red-200 text-red-400 group-hover:bg-red-vivid-600"
                     : props.type === "Word Document"
                     ? "bg-blue-200 text-blue-400 group-hover:bg-blue-vivid-600"
                     : "bg-gray-200 text-gray-400 group-hover:bg-gray-800")
               }
            >
               {props.type}
            </div>
            <h1 className="mt-1 text-2xl font-bold leading-tight font-ff">
               {props.title}
            </h1>
         </div>
         <p className="-mt-2 text-gray-600">{props.time + " ago"}</p>
      </div>
   );
};
