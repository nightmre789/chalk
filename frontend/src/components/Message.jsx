import React from "react";
import moment from "moment";

export default props => {
   return (
      <div className="px-5 py-3 bg-white border-b cursor-pointer message-item hover:shadow-lg hover:border-t-0 border-gray-cool-100 hover:border hover:z-10">
         <div className="flex items-center gap-x-2">
            <h1 className="text-2xl font-ff">
               {props.title}
               <span className="font-sans text-base text-indigo-400">
                  {` - ${moment(props.sent).fromNow()}`}
               </span>
            </h1>
         </div>
         <div className="mb-2 -mt-1 text-gray-400">{`by ${props.teacher.firstName} ${props.teacher.lastName}`}</div>
         <p>{props.content}</p>
      </div>
   );
};
