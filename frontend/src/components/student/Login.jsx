import React, { useState, useContext, useEffect, useRef } from "react";
import FormField from "./FormField";
import { store } from "@components/Store";
import { gql, useLazyQuery } from "@apollo/client";
import { gsap } from "gsap";

import bg from "@assets/images/bg.jpg";

const loginQuery = gql`
   query Student($rollNumber: String!) {
      student(id: -1, rollNumber: $rollNumber) {
         id
      }
   }
`;

const teacherQuery = gql`
   query Teacher($username: String!) {
      teacher(id: -1, username: $username) {
         id
      }
   }
`;

export default props => {
   const [isFilled, setFilled] = useState(false);
   const [input, setInput] = useState({
      "roll# / username": "",
      password: "",
   });
   const [rememberMe, setRememberMe] = useState(false);

   const { state, dispatch } = useContext(store);

   const inputHandler = (e, field) => {
      const current = { ...input };
      current[field] = e.target.value;
      console.log(current);
      setInput(current);
      setFilled(!Object.values(current).includes(""));
   };

   const toggleRememberMe = _ => setRememberMe(!rememberMe);

   const [getStudent] = useLazyQuery(loginQuery, {
      variables: { rollNumber: input["roll# / username"] },
      onCompleted: data => {
         if (isFilled && input["password"] === "password") {
            console.log(data, state);
            dispatch({
               type: "SET_ID",
               id: { id: data.student.id, accountType: 0 },
            });
         }
      },
   });

   const [getTeacher] = useLazyQuery(teacherQuery, {
      variables: { username: input["roll# / username"] },
      onCompleted: data => {
         if (isFilled && input["password"] === "password") {
            console.log(data, state);
            dispatch({
               type: "SET_ID",
               id: { id: data.teacher.id, accountType: 1 },
            });
         }
      },
   });

   const handleLogin = _ => {
      if (isFilled) {
         const isStudent = /^([0-9]{2}[IKFLPikflp][0-9]{4})$/.test(
            input["roll# / username"]
         );
         const isTeacher = /^(.*[A-Za-z].*\..*[A-Za-z].*)$/.test(
            input["roll# / username"]
         );
         if (isStudent) getStudent();
         else if (isTeacher) getTeacher();
         // else if (isTeacher) getTeacher();
         // getStudent({variables: {campus: }})
         // dispatch({ type: "SET_ID", id: 2 })
      }
   };

   let imgRef = useRef(null);
   let formRef = useRef(null);

   useEffect(_ => {
      gsap.from(imgRef, {
         duration: 0.5,
         opacity: 0,
         ease: "power3.out",
      });
      gsap.from(formRef, {
         delay: 0.2,
         duration: 1,
         y: 35,
         opacity: 0,
         ease: "power3.out",
      });
   }, []);

   return (
      <>
         <img
            src={bg}
            ref={e => (imgRef = e)}
            alt="bg"
            className="fixed top-0 h-screen md:h-auto"
         />
         <form
            ref={e => (formRef = e)}
            className="relative z-10 w-5/6 pb-8 mx-auto my-8 overflow-hidden bg-white shadow-xl md:w-2/3 lg:w-1/3"
         >
            <h2 className="my-16 text-4xl font-bold text-center text-gray-800 font-ff">
               Sign In
            </h2>

            {Object.keys(input).map(field => (
               <FormField
                  key={field}
                  name={field.toUpperCase()}
                  type={field === "password" ? "password" : "text"}
                  label={field}
                  placeholder=" "
                  changed={e => inputHandler(e, field)}
               />
            ))}

            <div className="flex">
               <button
                  type="button"
                  className={
                     "shadow-sm border-b w-8 h-8 py-auto my-2 ml-16 rounded-lg cursor-default focus:outline-none duration-100 " +
                     (rememberMe
                        ? "bg-indigo-500 hover:bg-indigo-600"
                        : "hover:bg-gray-300 bg-gray-200")
                  }
                  onClick={toggleRememberMe}
               >
                  <svg
                     viewBox="0 0 17 16"
                     className="mx-auto transform scale-50"
                  >
                     <path
                        d="M3.432 6.189a1 1 0 0 1 1.415 0L6.968 8.31l6.179-6.179a.99.99 0 0 1 1.401.013l2.122 2.122a.991.991 0 0 1 .014 1.4l-9.022 9.021a.99.99 0 0 1-1.401-.014l-4.95-4.95a.998.998 0 0 1 0-1.413l2.121-2.121z"
                        fill={rememberMe ? "#fff" : "#edf2f7"}
                     />
                  </svg>
               </button>
               <div className="my-auto ml-4 text-lg text-left text-gray-900 font-ff">
                  Stay signed in
               </div>
            </div>
            <button
               type="button"
               onClick={_ => handleLogin()}
               className={
                  "duration-200 block w-1/6 mx-auto mt-10 rounded-xl focus:outline-none " +
                  (isFilled ? "formbtn" : "formbtn-inactive disabled")
               }
            >
               <svg
                  className="transform scale-50"
                  viewBox="0 0 511.993 511.993"
               >
                  <path
                     d="M487.292,235.408H20.59c-11.372,0-20.59,9.224-20.59,20.59c0,11.366,9.217,20.59,20.59,20.59h466.702
				c11.372,0,20.59-9.217,20.59-20.59C507.882,244.625,498.665,235.408,487.292,235.408z"
                     fill={isFilled ? "#fff" : "#edf2f7"}
                  />
                  <path
                     d="M505.96,241.434L304.187,39.653c-8.044-8.037-21.07-8.037-29.114,0c-8.044,8.044-8.044,21.084,0,29.121l187.216,187.223
				L275.073,443.221c-8.044,8.037-8.044,21.077,0,29.114c4.022,4.022,9.286,6.033,14.557,6.033s10.535-2.011,14.557-6.033
				l201.773-201.78C514.004,262.511,514.004,249.47,505.96,241.434z"
                     fill={isFilled ? "#fff" : "#edf2f7"}
                  />
               </svg>
            </button>
            <div className="pt-4 mx-auto mt-8 mb-4 text-sm font-bold text-center text-gray-600 font-ff">
               <a
                  href="##"
                  className="block -my-2 hover:text-gray-900 focus:outline-none focus:text-gray-900"
               >
                  FORGOT YOUR PASSWORD?
               </a>
               <br />
               <a
                  href="##"
                  className="block -my-2 hover:text-gray-900 focus:outline-none focus:text-gray-900"
               >
                  CREATE AN ACCOUNT
               </a>
            </div>
         </form>
      </>
   );
};
