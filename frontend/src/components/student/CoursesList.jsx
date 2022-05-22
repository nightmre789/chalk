import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { gsap, TimelineMax, Sine } from "gsap";

export default props => {
   let titleRef = useRef(null);
   let bodyRef = useRef(null);

   useEffect(_ => {
      if (titleRef) {
         gsap.from(".course-item", {
            duration: 0.5,
            opacity: 0.5,
            ease: Sine.easeOut,
         });
      }
   });

   return (
      <div ref={e => (bodyRef = e)}>
         <h1
            ref={e => (titleRef = e)}
            className="mt-6 text-6xl font-bold tracking-tight text-center md:text-left"
         >
            My Courses
         </h1>
         <div className="mt-10 font-ff">
            <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {props.data.student.classSet.map(c => (
                  <Link to={`${c.id}`} key={c.id}>
                     <div className="flex flex-col h-64 p-6 bg-white rounded-md course-item course-item-hover">
                        <h1 className="text-3xl font-bold tracking-tight text-indigo-500">
                           {c.courseId.code + "-" + c.sectionName}
                        </h1>
                        <div className="-mt-1 tracking-wider text-gray-500">
                           {`${c.teacherId.firstName} ${c.teacherId.lastName}`}
                        </div>
                        <div className="flex items-end flex-1 text-2xl">
                           {c.courseId.name}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};
