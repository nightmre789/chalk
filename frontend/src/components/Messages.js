import React, { useContext } from "react";
import Message from "./Message";
import { gql, useQuery } from "@apollo/client";
import { store } from "./Store";

const messageQuery = gql`
   query Messages($studentId: Int!) {
      student(id: $studentId, rollNumber: "") {
         classSet {
            teacherId {
               firstName
               lastName
            }
            messageSet {
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

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   const messages = [];
   data.student.classSet.map(c => {
      c.messageSet.map(m => {
         messages.push({ message: m, teacher: c.teacherId });
      });
   });

   messages.reverse();
   console.log(messages);
   return (
      <div className="flex flex-col flex-1">
         <h1 className="mt-10 text-6xl font-bold tracking-tight text-center font-ff md:text-left">
            Messages
         </h1>
         {messages.map(m => (
            <Message
               content={m.message.content}
               title={m.message.title}
               sent={m.message.sent}
               teacher={m.teacher}
            />
         ))}
      </div>
   );
};
