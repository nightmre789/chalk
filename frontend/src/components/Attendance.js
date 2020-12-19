import React, { useEffect } from "react";

export default props => {
   useEffect(
      _ => {
         props.setActivePage(2);
      },
      [props]
   );
   return (
      <div className="w-1/2 mt-4 font-ff">
         <div className="flex flex-col rounded-md gap-y-2">
            {props.attendance.map(a => (
               <div
                  className={`p-4 tracking-wider  ${
                     a.attended ? "bg-white" : "bg-red-050"
                  }`}
               >
                  {a.date}
               </div>
            ))}
         </div>
      </div>
   );
};
