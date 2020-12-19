import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import CourseNav from "./CourseNav.js";
import Overview from "./Overview";
import Marks from "./Marks";
import Resources from "./Resources";
import Attendance from "./Attendance";

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
            mark
            weightage
         }
      }
   }
`;

export default props => {
   const { id } = useParams();
   const { loading, error, data } = useQuery(classQuery, { variables: { id } });

   const [activePage, setActivePage] = useState(0);

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   const c = data.classQ;

   return (
      <div>
         <h1 className="-mb-4 text-6xl font-bold tracking-tight text-center text-indigo-500 font-ff md:text-left">
            {`${c.courseId.code.substring(0, 2)} `}
            <span className="text-gray-800">
               {c.courseId.code.substring(2, c.courseId.code.length)}
            </span>
         </h1>
         <h3 className="mt-1 ml-1 text-lg font-bold tracking-wide text-center text-gray-700 md:text-left font-ff">
            {c.courseId.name}
            <span className="font-medium text-gray-500">
               {`- ${c.teacherId.firstName} ${c.teacherId.lastName}| Section ${c.sectionName}`}
            </span>
         </h3>
         <CourseNav
            id={c.id}
            activePage={activePage}
            setActivePage={setActivePage}
         />
         <Routes>
            <Route
               path="/"
               element={
                  <Overview
                     classQ={c}
                     name={`${c.teacherId.firstName} ${c.teacherId.lastName}`}
                  />
               }
            />
            <Route
               path="marks"
               element={
                  <Marks
                     items={c.markeditemSet}
                     setActivePage={setActivePage}
                  />
               }
            />
            <Route path="resources" element={<Resources />} />
            <Route
               path="attendance"
               element={<Attendance setActivePage={setActivePage} />}
            />
         </Routes>
      </div>
   );
};
