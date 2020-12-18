import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import CoursesList from "./CoursesList";
import Course from "./Course";

const classesQuery = gql`
   {
      student(batch: 2018, rollNumber: 1129, campus: "Karachi") {
         id
         classSet {
            id
            teacherId {
               id
               firstName
               lastName
            }
            courseId {
               id
               code
               name
            }
            sectionName
         }
      }
   }
`;

export default props => {
   useEffect(_ => {
      props.setActivePage(1);
   });

   const { loading, error, data } = useQuery(classesQuery);

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   return (
      <Routes>
         <Route path="/" element={<CoursesList data={data} />} />
         <Route path=":id/*" element={<Course />} />
      </Routes>
   );
};
