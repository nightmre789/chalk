import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_MESSAGE = gql`
   mutation AddCourse($classId: Int!, $title: String!, $content: String!) {
      createMessage(classId: $classId, title: $title, content: $content) {
         id
      }
   }
`;

export default props => {
   const [addMessage] = useMutation(ADD_MESSAGE);
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");

   const handleSubmit = evt => {
      evt.preventDefault();
      setTitle("");
      setContent("");
      addMessage({
         variables: {
            classId: props.id,
            title: title,
            content: content,
         },
      });
   };
   return (
      <div className="flex flex-col flex-1">
         <h1 className="mt-6 text-6xl font-bold tracking-tight text-center font-ff md:text-left">
            Make announcement
         </h1>
         <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full lg:w-2/3 xl:w-1/2 gap-y-2"
         >
            <label className="text-xl">
               Title
               <br />
               <input
                  className="w-full p-2 text-lg"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
               />
            </label>
            <label className="text-xl">
               Content
               <br />
               <textarea
                  className="w-full p-2 text-base"
                  name="Content"
                  rows="10"
                  cols="30"
                  value={content}
                  onChange={e => setContent(e.target.value)}
               />
            </label>
            <input
               type="submit"
               value="Submit"
               className="flex items-center justify-center h-10 py-2 text-white bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700"
            />
         </form>
      </div>
   );
};
