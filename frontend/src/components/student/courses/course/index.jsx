import React, { useState, useContext } from "react";
import { Route, Routes, Outlet, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Store } from "@components/Store";

import CourseNav from "./courseNav";

const classQuery = gql`
   query Class($id: Int!, $studentId: Int!) {
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
            id
            title
            content
            sent
         }
         markeditemSet {
            id
            name
            avg
            min
            max
            total
            mark(studentId: $studentId) {
               mark
            }
            weightage
         }
         attendance(studentId: $studentId) {
            id
            date
            attended
         }
         attendanceStats(studentId: $studentId) {
            total
            attended
         }
      }
   }
`;

export default props => {
   const { state } = useContext(Store);
   const { id } = useParams();
   const studentId = state.id;
   const { loading, error, data } = useQuery(classQuery, {
      variables: { id, studentId },
   });

   const [activePage, setActivePage] = useState(0);

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   const c = data.classQ;

   return (
      <div className="mt-8">
         <h1 className="-mb-4 text-6xl font-bold tracking-tight text-center text-indigo-500 font-ff md:text-left">
            {`${c.courseId.code.substring(0, 2)} `}
            <span className="text-gray-800">
               {c.courseId.code.substring(2, c.courseId.code.length)}
            </span>
         </h1>
         <h3 className="mt-1 ml-1 text-lg font-bold tracking-wide text-center text-gray-700 md:text-left font-ff">
            {c.courseId.name}
            <span className="font-medium text-gray-500">
               {`- ${c.teacherId.firstName} ${c.teacherId.lastName} | Section ${c.sectionName}`}
            </span>
         </h3>
         <CourseNav
            id={c.id}
            activePage={activePage}
            setActivePage={setActivePage}
         />
         <Outlet context={[c, setActivePage]} />
      </div>
   );
};
