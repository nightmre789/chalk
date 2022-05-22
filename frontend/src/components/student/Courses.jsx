import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { store } from "@components/Store";

import CoursesList from "./CoursesList";
import Course from "./Course";

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
   const { state } = useContext(store);
   useEffect(
      _ => {
         props.setActivePage(1);
      },
      [props]
   );

   const studentId = state.id;

   const { loading, error, data } = useQuery(classesQuery, {
      variables: { studentId },
   });

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   return (
      <Routes>
         <Route path="/" element={<CoursesList data={data} />} />
         <Route path=":id/*" element={<Course />} />
      </Routes>
   );
};
