import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Resource from "./components/Resource";

export default _ => {
   const [c, setActivePage] = useOutletContext();
   useEffect(_ => {
      setActivePage(3);
   }, []);

   return (
      <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 lg:grid-cols-2 2xl:grid-cols-3 xl:pr-64">
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
