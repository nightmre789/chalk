import React from "react";

export default props => {
   return (
      <div className="px-8 py-6 bg-white drop-shadow-md hover:drop-shadow-lg hover:z-10 announcement-item">
         <div className="flex h-12">
            <img
               className="w-12 rounded-full"
               src={props.senderImage}
               alt="profile"
            />
            <div className="ml-4">
               <h2 className="text-lg text-gray-700 font-ff">
                  {props.senderName}
               </h2>
               <p className="-mt-1 text-sm tracking-wide text-gray-500">
                  {props.time}
               </p>
            </div>
         </div>
         <h1 className="mt-5 text-2xl font-bold text-gray-600 font-ff">
            {props.title}
         </h1>
         <p className="text-gray-600 ">{props.content}</p>
      </div>
   );
};
