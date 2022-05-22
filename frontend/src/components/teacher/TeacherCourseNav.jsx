import React, { useRef, useState, useEffect } from "react";
import { TweenMax, Power3, gsap, TimelineMax } from "gsap";

import TeacherCourseNavItem from "./TeacherCourseNavItem";
import useWindowSize from "@hooks/useWindowSize";

export default props => {
   const [courseNavItems] = useState([
      { label: "Announcement", icon: "messages", path: "/" },
      { label: "Gradebook", icon: "marks", path: "/marks" },
      { label: "Attendance", icon: "attendance", path: "/attendance" },
      { label: "Resources", icon: "resources", path: "/resources" },
      { label: "Assignments", icon: "assignments" },
   ]);
   const size = useWindowSize();

   const refs = courseNavItems.map(_ => useRef(null));
   let courseNavSlider = useRef(null);

   useEffect(_ => {
      let t1 = new TimelineMax();
      t1.staggerFrom(".course-nav-item", 0.4, {
         y: 25,
         opacity: 0,
         stagger: 0.025,
         ease: "sine.out",
      });
   }, []);

   useEffect(
      _ => {
         const rect = refs[props.activePage].current.getBoundingClientRect();
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
      [refs, props.activePage, size.width]
   );

   return (
      <div className="relative mt-6">
         <div
            ref={e => (courseNavSlider = e)}
            className="absolute h-12 mt-1 bg-white rounded-full shadow-md"
         />
         <div className="relative flex justify-center overflow-hidden font-semibold sm:overflow-x-auto md:justify-start h-14">
            {courseNavItems.map((item, index) => (
               <TeacherCourseNavItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  active={index === props.activePage}
                  click={_ => props.setActivePage(index)}
                  ref={refs[index]}
                  code={props.code}
                  path={`1/${item.path}`}
               />
            ))}
         </div>
      </div>
   );
};
