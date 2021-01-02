import React, { useRef, useEffect, useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { store } from "./Store";

import { gsap, TimelineMax } from "gsap";

const classesQuery = gql`
   query Messages($studentId: Int!) {
      student(id: $studentId, rollNumber: "") {
         id
         classSet {
            courseId {
               code
               name
               creditHours
            }
         }
      }
   }
`;

export default props => {
   const { state } = useContext(store);
   useEffect(
      _ => {
         props.setActivePage(4);
      },
      [props]
   );

   const studentId = state.id;

   const { loading, error, data } = useQuery(classesQuery, {
      variables: { studentId },
   });

   let titleRef = useRef(null);
   let bodyRef = useRef(null);
   useEffect(_ => {
      if (titleRef && bodyRef && !loading) {
         let t1 = new TimelineMax();
         gsap.from(bodyRef, {
            autoAlpha: 0,
            duration: 0.1,
         });
         gsap.from(titleRef, {
            duration: 0.25,
            y: 15,
            opacity: 0,
            ease: "sine.inout",
         });
         t1.staggerFrom(".fee-item", 0.25, {
            delay: 0.1,
            y: 10,
            opacity: 0,
            stagger: 0.025,
            ease: "sine.out",
         });
      }
   });

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   const classes = data.student.classSet;
   let total = 2000;
   for (let i = 0; i < classes.length; i++) {
      const course = classes[i].courseId;
      total +=
         course.creditHours *
         (course.code.substring(0, 2) === "CS" ? 10000 : 8000);
   }

   return (
      <div className="lg:w-2/3 xl:w-1/2" ref={e => (bodyRef = e)}>
         <h1
            ref={e => (titleRef = e)}
            className="mt-10 text-6xl font-bold tracking-tight text-center font-ff md:text-left"
         >
            Fee Challan
         </h1>

         <div className="flex flex-col mt-4 gap-y-2">
            <h2 className="text-lg text-gray-500 fee-item">
               {`Challan ID: ${data.student.id}-FW2020`}
            </h2>
            {classes.map(c => (
               <div className="flex items-center p-4 text-lg bg-white rounded-sm hover:shadow-md fee-item gap-x-2">
                  <div className="mt-1 font-ff">{c.courseId.code}</div>
                  <div>{c.courseId.name}</div>
                  <div className="flex justify-end flex-1">
                     {`${c.courseId.creditHours} x ${
                        c.courseId.code.substring(0, 2) === "CS" ? "10" : "8"
                     }000`}
                  </div>
               </div>
            ))}
            <div className="flex items-center p-4 text-lg bg-white rounded-sm hover:shadow-md fee-item gap-x-2">
               <div className="mt-1 font-ff">Sports Fee</div>
               <div className="flex justify-end flex-1">2000</div>
            </div>
            <div className="flex items-center p-4 text-lg bg-white rounded-sm hover:shadow-md fee-item gap-x-2">
               <div className="mt-1 font-ff">Total</div>
               <div className="flex justify-end flex-1">{total}</div>
            </div>
         </div>
      </div>
   );
};
