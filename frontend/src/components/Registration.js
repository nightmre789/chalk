import React, { useState, useEffect, useContext } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { store } from "./Store";
import SVG from "react-inlinesvg";

const registrationQuery = gql`
   query Class($studentId: Int!) {
      classes {
         id
         sectionName
         teacherId {
            firstName
            lastName
         }
         courseId {
            code
            name
            creditHours
         }
         semesterId {
            name
         }
      }
      student(id: $studentId, rollNumber: "") {
         classSet {
            id
            courseId {
               code
               name
               creditHours
            }
            semesterId {
               name
            }
         }
      }
   }
`;

const ADD_COURSE = gql`
   mutation AddCourse($classId: Int!, $studentId: Int!) {
      createRegistration(classId: $classId, studentId: $studentId) {
         id
      }
   }
`;

export default props => {
   const { state } = useContext(store);
   const studentId = state.id;
   const { loading, error, data } = useQuery(registrationQuery, {
      variables: { studentId },
   });
   const [addCourse] = useMutation(ADD_COURSE);

   const [classes, setClasses] = useState([]);
   useEffect(
      _ => {
         if (loading === false && data) {
            let taken = data.student.classSet;
            let offered = data.classes;

            setClasses(
               offered.filter(
                  o1 =>
                     !taken.some(o2 => o1.id === o2.id) &&
                     o1.semesterId.name === "FW2020"
               )
            );
         }
      },
      [loading, data]
   );

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   return (
      <div className="flex flex-col flex-1">
         <h1 className="mt-10 text-6xl font-bold tracking-tight text-center font-ff md:text-left">
            Available Courses
         </h1>
         <div className="mt-4 font-ff">
            <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {classes.map(c => (
                  <div className="flex flex-col h-64 p-6 bg-white rounded-md hover:shadow-md">
                     <div className="flex flex-row-reverse items-center">
                        <button
                           className="flex items-center justify-center w-12 h-12 p-2 text-indigo-500 duration-100 bg-white rounded-full hover:text-white hover:shadow-md hover:bg-indigo-400"
                           onClick={_ => {
                              addCourse({
                                 variables: {
                                    studentId,
                                    classId: c.id,
                                 },
                              });
                              setClasses(classes.filter(o => o.id !== c.id));
                           }}
                        >
                           <SVG
                              src={require("../assets/icons/add.svg")}
                              className="fill-current"
                           />
                        </button>
                        <h1 className="flex-1 text-3xl font-bold tracking-tight text-indigo-500 ">
                           {c.courseId.code + "-" + c.sectionName}
                        </h1>
                     </div>
                     <div className="-mt-1 tracking-wider text-gray-500">
                        {`${c.teacherId.firstName} ${c.teacherId.lastName}`}
                     </div>
                     <div className="flex items-end flex-1 text-2xl">
                        {c.courseId.name}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
