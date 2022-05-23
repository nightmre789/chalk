import React, { useEffect, useState, useRef } from "react";
import SVG from "react-inlinesvg";
import { TweenMax, Power3 } from "gsap";

export default props => {
   const [open, setOpen] = useState(false);

   let ref = useRef(null);
   useEffect(
      _ => {
         if (open) {
            TweenMax.set(ref.current, { height: "auto" });
            TweenMax.from(ref.current, 0.5, {
               height: "0",
               ease: Power3.easeOut,
            });
         } else {
            TweenMax.to(ref.current, 0.5, {
               height: "0",
               ease: Power3.easeOut,
            });
         }
      },
      [open]
   );
   return (
      <div className="rounded-sm bg-gray-040 mark-item">
         <button
            className={
               "flex items-center w-full p-4 focus:outline-none bg-white drop-shadow-md hover:drop-shadow-lg " +
               (open
                  ? "text-white bg-indigo-500 hover:bg-indigo-600"
                  : "hover:text-indigo-500 focus:text-indigo-500 ")
            }
            onClick={_ => setOpen(!open)}
         >
            <h1 className="px-4 text-2xl">{props.title}</h1>
            <SVG
               className={
                  "ml-auto fill-current transform duration-200 " +
                  (open ? "rotate-90" : "")
               }
               src="/src/assets/icons/chevron.svg"
            />
         </button>
         <div ref={ref} className="h-0 overflow-hidden bg-white drop-shadow-md">
            {props.children}
         </div>
      </div>
   );
};
