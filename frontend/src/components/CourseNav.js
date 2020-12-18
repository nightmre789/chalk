import React, { useRef, useState, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import CourseNavItem from "./CourseNavItem";
import useWindowSize from "../hooks/useWindowSize";

export default props => {
   const [courseNavItems] = useState([
      { label: "Overview", icon: "overview", path: "/" },
      { label: "Marks", icon: "marks", path: "/marks" },
      { label: "Resources", icon: "resources", path: "/resources" },
      { label: "Assignments", icon: "assignments" },
      { label: "Attendance", icon: "attendance", path: "/attendance" },
   ]);
   const size = useWindowSize();

   const [activePage, setActivePage] = useState(0);
   const refs = courseNavItems.map(_ => useRef(null));
   let courseNavSlider = useRef(null);

   useEffect(
      _ => {
         const rect = refs[activePage].current.getBoundingClientRect();
         TweenMax.to(courseNavSlider, 0.75, {
            css: {
               left:
                  rect.left -
                  (size.width > 768
                     ? refs[0].current.getBoundingClientRect().left
                     : 12),
               width: rect.width,
            },
            ease: Power3.easeOut,
         });
      },
      [refs, activePage, size.width]
   );

   return (
      <div className="relative mt-6">
         <div
            ref={e => (courseNavSlider = e)}
            className="absolute h-12 mt-1 bg-white rounded-full shadow-md"
         />
         <div className="relative flex justify-center overflow-hidden font-semibold sm:overflow-x-auto md:justify-start h-14">
            {courseNavItems.map((item, index) => (
               <CourseNavItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  active={index === activePage}
                  click={_ => setActivePage(index)}
                  ref={refs[index]}
                  code={props.code}
                  path={`${props.id}/${item.path}`}
               />
            ))}
         </div>
      </div>
   );
};
