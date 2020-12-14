import React, { useRef, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

import Course from "./Course";
import Messages from "./Messages";

export default _ => {
   const size = useWindowSize();

   useEffect(_ => {
      requestAnimationFrame(_ => skewScrolling());
   });

   let skewScroll = useRef();

   useEffect(
      _ => {
         document.body.style.height = `${
            skewScroll.current.getBoundingClientRect().height
         }px`;
      },
      [size.height]
   );

   const skewData = {
      ease: 0.15,
      current: 0,
      previous: 0,
      rounded: 0,
   };

   const skewScrolling = _ => {
      skewData.current = window.scrollY;
      skewData.previous +=
         (skewData.current - skewData.previous) * skewData.ease;
      skewData.rounded = Math.round(skewData.previous * 100) / 100;

      const difference = skewData.current - skewData.rounded;
      const acceleration = difference / size.width;
      const velocity = +acceleration;
      const skew = velocity * 7.5;

      skewScroll.current.style.transform = `translate3d(0, -${skewData.rounded}px, 0) skewY(${skew}deg)`;

      requestAnimationFrame(_ => skewScrolling());
   };

   return (
      <div className="h-full ">
         <Course
            code="CS309"
            title="Database Systems"
            teacher="Dr. Zulfiqar Memon"
            section="A"
            ref={skewScroll}
         />
      </div>
   );
};
