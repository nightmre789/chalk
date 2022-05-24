import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Store } from "@components/Store";

import CoursesList from "./coursesList";
import Course from "./course";

import Overview from "./course/overview";
import Marks from "./course/marks";
import Resources from "./course/resources";
import Attendance from "./course/attendance";

const classesQuery = gql`
   query Messages($studentId: Int!) {
      student(id: $studentId, rollNumber: "") {
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
   const { state } = useContext(Store);
   useEffect(_ => {
      props.setActivePage(1);
   }, []);

   const studentId = state.id;

   const { loading, error, data } = useQuery(classesQuery, {
      variables: { studentId },
   });

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   return (
      <Routes>
         <Route path="/" element={<CoursesList data={data} />} />
         <Route path=":id/*" element={<Course />}>
            <Route path="" element={<Overview />} />
            <Route path="marks" element={<Marks />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="resources" element={<Resources />} />
         </Route>
      </Routes>
   );
};
