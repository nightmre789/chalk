import React, { useContext, useEffect, useRef } from "react";
import Message from "./components/Message";
import { gql, useQuery } from "@apollo/client";
import { store } from "@components/Store";
// import { gsap, TimelineMax, Sine } from "gsap";

const messageQuery = gql`
   query Messages($studentId: Int!) {
      student(id: $studentId, rollNumber: "") {
         classSet {
            teacherId {
               firstName
               lastName
            }
            messageSet {
               id
               title
               content
               sent
            }
         }
      }
   }
`;

export default props => {
   const { state } = useContext(store);
   const studentId = state.id;
   const { loading, error, data } = useQuery(messageQuery, {
      variables: { studentId },
   });

   let titleRef = useRef(null);
   let bodyRef = useRef(null);
   // useEffect(_ => {
   //    if (titleRef && bodyRef && !loading) {
   //       let t2 = new TimelineMax();
   //       gsap.from(bodyRef, {
   //          autoAlpha: 0,
   //          duration: 0.1,
   //       });
   //       gsap.from(titleRef.current, {
   //          duration: 0.25,
   //          y: 15,
   //          opacity: 0,
   //          ease: "sine.inout",
   //       });
   //       t2.staggerFrom(".message-item", 0.25, {
   //          delay: 0.1,
   //          y: 10,
   //          opacity: 0,
   //          stagger: 0.05,
   //          ease: Sine.easeOut,
   //       });
   //    }
   // });

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   const messages = [];
   data.student.classSet.map(c => {
      c.messageSet.map(m => {
         messages.push({ message: m, teacher: c.teacherId });
      });
   });

   messages.sort((a, b) => new Date(b.message.sent) - new Date(a.message.sent));
   return (
      <div
         className="flex flex-col flex-1 md:pr-16 lg:pr-32 xl:pr-64 gap-y-2"
         ref={e => (bodyRef = e)}
      >
         <div
            ref={titleRef}
            className="mt-10 text-6xl font-bold tracking-tight text-center font-ff md:text-left"
         >
            Messages
         </div>
         {messages.map(m => (
            <Message
               key={m.message.id}
               id={m.message.id}
               content={m.message.content}
               title={m.message.title}
               sent={m.message.sent}
               teacher={m.teacher}
            />
         ))}
      </div>
   );
};
