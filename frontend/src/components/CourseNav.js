import React, { useRef, useState, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import CourseNavItem from "./CourseNavItem";
import useWindowSize from "../hooks/useWindowSize";

export default _ => {
   const [courseNavItems] = useState([
      { label: "Overview", icon: "dashboard" },
      { label: "Marks", icon: "courses" },
      { label: "Resources", icon: "messages" },
      { label: "Assignments", icon: "registration" },
      { label: "Attendance", icon: "fees" },
   ]);
   const size = useWindowSize();

   const [activePage, setActivePage] = useState(0);
   const refs = courseNavItems.map(_ => useRef(null));
   let courseNavSlider = useRef(null);

   useEffect(
      _ => {
         const rect = refs[activePage].current.getBoundingClientRect();
         TweenMax.to(courseNavSlider, 0.5, {
            css: {
               left: rect.left - refs[0].current.getBoundingClientRect().left,
               width: rect.width,
            },
            ease: Power3.easeOut,
         });
         console.log(rect.left, " ", courseNavSlider.style.left);
      },
      [activePage, refs, size.width]
   );

   return (
      <div className="relative flex justify-start overflow-x-auto font-semibold bg-white rounded-lg shadow-md sm:justify-center md:justify-start h-14">
         <div
            ref={e => (courseNavSlider = e)}
            className="absolute bottom-0 bg-indigo-500 rounded-b-lg min-h-1"
         ></div>
         {courseNavItems.map((item, index) => (
            <CourseNavItem
               key={index}
               label={item.label}
               icon={item.icon}
               active={index === activePage}
               click={_ => setActivePage(index)}
               ref={refs[index]}
            />
         ))}
      </div>
   );
};
