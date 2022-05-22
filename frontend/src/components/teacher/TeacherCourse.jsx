import React, { useState, useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { store } from ".@components/Store";

import TeacherCourseNav from "./TeacherCourseNav";
import TeacherResources from "./TeacherResources";
import TeacherAttendance from "./TeacherAttendance";
import TeacherAnnouncement from "./TeacherAnnouncement";
import Gradebook from "./Gradebook";

const classQuery = gql`
   query Class($id: Int!) {
      classQ(id: $id) {
         id
         teacherId {
            firstName
            lastName
         }
         sectionName
         courseId {
            code
            name
         }
         messageSet {
            title
            content
            sent
         }
         markeditemSet {
            name
            avg
            min
            max
            total
            weightage
         }
      }
   }
`;

export default _ => {
   const { id } = useParams();
   const [activePage, setActivePage] = useState(0);
   const { loading, error, data } = useQuery(classQuery, {
      variables: { id },
   });

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;
   return (
      <>
         <div className="mt-8">
            <TeacherCourseNav
               activePage={activePage}
               setActivePage={setActivePage}
            />
            <Routes>
               <Route
                  path="/"
                  element={<TeacherAnnouncement id={data.classQ.id} />}
               />
               <Route
                  path="gradebook"
                  element={<Gradebook setActivePage={setActivePage} />}
               />
               <Route path="resources" element={<TeacherResources />} />
               <Route
                  path="attendance"
                  element={<TeacherAttendance setActivePage={setActivePage} />}
               />
            </Routes>
         </div>
      </>
   );
};
