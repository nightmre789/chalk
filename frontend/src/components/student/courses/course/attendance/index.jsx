import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default _ => {
   const [c, setActivePage] = useOutletContext();
   useEffect(_ => {
      setActivePage(2);
   }, []);

   return (
      <div className="w-1/2 mt-4 font-ff">
         <div className="flex flex-col rounded-md gap-y-2">
            {c.attendance.map(a => (
               <div
                  key={a.id}
                  className={`attendance-item p-4 tracking-wider ${
                     a.attended ? "bg-white" : "bg-red-50"
                  }`}
               >
                  {a.date}
               </div>
            ))}
         </div>
      </div>
   );
};
