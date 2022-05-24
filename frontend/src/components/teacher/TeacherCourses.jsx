import React, { useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Store } from ".@components/Store";
import SVG from "react-inlinesvg";

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
   const { state } = useContext(Store);

   const teacherId = state.id;

   const { loading, error, data } = useQuery(classesQuery, {
      variables: { teacherId },
   });

   const { _, dispatch } = useContext(Store);

   const logOut = _ => {
      dispatch({ type: "SET_ID", id: { id: -1, accountType: -1 } });
   };

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;
   return (
      <>
         <Routes>
            <Route path="/" element={<TeacherCoursesList data={data} />} />
            <Route path=":id/*" element={<TeacherCourse />} />
         </Routes>
         <Link to="/">
            <button
               className="fixed top-0 right-0 flex flex-col items-center justify-center py-4 pl-6 pr-4 mt-8 mr-8 text-xl font-semibold text-center text-gray-700 duration-200 cursor-pointer lg:flex-row lg:text-left lg:gap-x-3 hover:text-indigo-600"
               onClick={logOut}
            >
               <SVG src="/src/assets/icons/door.svg" className="fill-current" />
               <p className="flex-1 w-full">Sign Out</p>
            </button>
         </Link>
      </>
   );
};
