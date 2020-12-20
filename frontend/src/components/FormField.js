import React from "react";

export default props => {
   return (
      <div className="relative h-20 mx-16 my-4 overflow-hidden bg-gray-200 border-b-2 hover:bg-gray-300">
         <input
            id={props.label}
            className="z-10 block w-full h-full p-0 px-2 pt-6 text-2xl font-bold text-gray-800 duration-150 bg-transparent appearance-none font-ff"
            type={props.type}
            name={props.label}
            placeholder={props.placeholder}
            onChange={props.changed}
         />
         <label
            className="absolute top-0 block h-4 my-8 ml-6 text-lg font-bold text-gray-600 duration-300 origin-bottom-left cursor-text font-ff"
            htmlFor={props.label}
         >
            {props.name}
         </label>
         <div className="absolute top-0 block mx-2 mt-2 text-sm text-gray-700 origin-center transform scale-0 opacity-0 font-ff duration-250">
            {props.name}
         </div>
      </div>
   );
};
