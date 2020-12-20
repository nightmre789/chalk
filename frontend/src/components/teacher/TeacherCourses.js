import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { store } from "../Store";

import TeacherCoursesList from "./TeacherCoursesList";
import TeacherCourse from "./TeacherCourse";

const classesQuery = gql`
   query Messages($teacherId: Int!) {
      teacher(id: $teacherId, username: "") {
         id
         firstName
         lastName
         classSet {
            id
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

   const teacherId = state.id;

   const { loading, error, data } = useQuery(classesQuery, {
      variables: { teacherId },
   });

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;
   return (
      <Routes>
         <Route path="/" element={<TeacherCoursesList data={data} />} />
         <Route path=":id/*" element={<TeacherCourse />} />
      </Routes>
   );
};
