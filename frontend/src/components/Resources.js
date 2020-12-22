import React, { useEffect } from "react";
import { TimelineMax } from "gsap";

import Resource from "./Resource";

export default _ => {
   useEffect(_ => {
      let t1 = new TimelineMax();
      t1.staggerFrom(".resource-item", 0.25, {
         delay: 0.05,
         scale: 0.975,
         opacity: 0,
         stagger: 0.04,
         ease: "sine.in",
      });
   }, []);
   return (
      <div className="grid grid-cols-4 mt-4 gap-x-12 gap-y-8">
         <Resource time="4 minutes" type="PDF" title="Course Syllabus" />
         <Resource
            time="4 minutes"
            type="Word Document"
            title="Course Syllabus That is Long"
         />
         <Resource
            time="4 minutes"
            type="Word Document"
            title="Course Syllabus"
         />
         <Resource time="4 minutes" type="Other" title="Course Syllabus" />
      </div>
   );
};
