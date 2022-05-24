import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import Dashboard from "./dashboard";
import Courses from "./courses";
import Messages from "./messages";
import Registration from "./registration";
import Fees from "./fees";

// import TeacherCourses from "./teacher/TeacherCourses";

export default _ => {
   const [navOpen, setNavOpen] = useState(false);
   const [activePage, setActivePage] = useState(0);
   const location = useLocation();
   const [navItems] = useState([
      { label: "Dashboard", icon: "dashboard", path: "/" },
      { label: "My Courses", icon: "courses", path: "/courses" },
      { label: "Messages", icon: "messages", path: "/messages" },
      { label: "Registration", icon: "registration", path: "/registration" },
      { label: "Fees", icon: "fees", path: "/fees" },
   ]);

   return (
      <div className="fixed w-full h-screen overflow-y-hidden bg-slate-200 md:p-4">
         <div
            className={`relative h-screen overflow-y-auto shadow-lg md:p-6 bg-slate-50 md:h-[97vh] md:flex`}
         >
            <Nav
               open={navOpen}
               setOpen={setNavOpen}
               items={navItems}
               activePage={activePage}
               setActivePage={setActivePage}
            />

            <div className={`relative px-5 ml-auto md:pl-16 md:w-5/6`}>
               {/* <div className="absolute z-20 flex items-center w-full pr-5 gap-x-6">
                     <div
                        className={
                           "p-2 duration-75 nav-button text-slate-400 hover:text-indigo-vivid-500  " +
                           (navOpen ? "opened" : "")
                        }
                        onClick={_ => {
                           setNavOpen(!navOpen);
                           console.log(navOpen);
                        }}
                     >
                        <SVG
                           className="fill-current"
                           src="/src/assets/icons/menu.svg"
                        />
                     </div>

                     <div className="flex self-end justify-self-end gap-x-6">
                        <div className="p-3 md:p-4 nav-button text-slate-400 hover:text-indigo-vivid-500 md:w-16 md:h-16">
                           <SVG
                              className="h-full fill-current"
                              src="/src/assets/icons/bell.svg"
                           />
                        </div>
                        <div className="nav-button md:w-16 md:h-16">
                           <img
                              className="rounded-full"
                              src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                              alt="profile"
                           />
                        </div>
                     </div>
                  </div> */}
               <AnimatePresence exitBeforeEnter>
                  <Routes location={location} key={location.pathname}>
                     <Route
                        path="/"
                        element={<Dashboard setActivePage={setActivePage} />}
                     />
                     <Route
                        path="courses/*"
                        element={<Courses setActivePage={setActivePage} />}
                     />
                     <Route
                        path="messages"
                        element={<Messages setActivePage={setActivePage} />}
                     />
                     <Route
                        path="registration"
                        element={<Registration setActivePage={setActivePage} />}
                     />
                     <Route
                        path="fees"
                        element={<Fees setActivePage={setActivePage} />}
                     />
                  </Routes>
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
};
