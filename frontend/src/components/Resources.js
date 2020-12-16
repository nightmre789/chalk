import React from "react";

import Resource from "./Resource";

export default _ => {
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
