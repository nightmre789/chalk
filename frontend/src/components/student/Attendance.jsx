import React, { useEffect } from "react";
import { TimelineMax } from "gsap";

export default props => {
   useEffect(
      _ => {
         props.setActivePage(2);
      },
      [props]
   );
   useEffect(_ => {
      let t1 = new TimelineMax();
      t1.staggerFrom(".attendance-item", 0.25, {
         delay: 0.05,
         scale: 0.975,
         opacity: 0,
         stagger: 0.04,
         ease: "sine.in",
      });
   }, []);
   return (
      <div className="w-1/2 mt-4 font-ff">
         <div className="flex flex-col rounded-md gap-y-2">
            {props.attendance.map(a => (
               <div
                  className={`attendance-item p-4 tracking-wider  ${
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
