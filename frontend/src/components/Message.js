import React from "react";
import moment from "moment";

export default props => {
   return (
      <div className="px-5 py-3 bg-white border-b cursor-pointer hover:shadow-lg hover:border-t-0 border-gray-cool-100 hover:border hover:z-10">
         <div className="flex items-center gap-x-2">
            <h1 className="text-xl font-ff">{props.title}</h1>
            <div className="text-sm text-indigo-400">
               {` - ${moment(props.sent).fromNow()}`}
            </div>
         </div>
         <div className="mb-2 -mt-1 text-sm text-gray-400">{`by ${props.teacher.firstName} ${props.teacher.lastName}`}</div>
         <p>{props.content}</p>
      </div>
   );
};
