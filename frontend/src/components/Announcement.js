import React from "react";

export default props => {
   return (
      <div className="px-8 py-6 bg-white hover:shadow-lg hover:z-10">
         <div className="flex h-12">
            <img
               className="w-12 rounded-full"
               src={props.senderImage}
               alt="profile"
            />
            <div className="ml-4">
               <h2 className="text-lg font-semibold text-gray-700">
                  {props.senderName}
               </h2>
               <p className="text-gray-400">{props.time + " ago"}</p>
            </div>
         </div>
         <h1 className="mt-5 text-3xl font-bold text-gray-700 font-ff">
            {props.title}
         </h1>
         <p className="mt-2 font-sans text-gray-400 ">{props.content}</p>
      </div>
   );
};
