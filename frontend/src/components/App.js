import React, { useState, useRef, useEffect } from "react";
import { TweenMax } from "gsap";

import Nav from "./Nav";
import Page from "./Page";

export default _ => {
   let appRef = useRef(null);
   useEffect(_ => {
      TweenMax.to(appRef, 0, { css: { visibility: "visible" } });
   });

   const [navOpen, setNavOpen] = useState(false);
   const [activePage, setActivePage] = useState(0);
   const [navItems] = useState([
      { label: "Dashboard", icon: "dashboard" },
      { label: "My Courses", icon: "courses" },
      { label: "Messages", icon: "messages" },
      { label: "Registration", icon: "registration" },
      { label: "Fees", icon: "fees" },
   ]);

   return (
      <div
         className="fixed w-full h-screen overflow-y-hidden bg-gray-cool-200 md:p-4"
         ref={e => (appRef = e)}
      >
         <div className="h-screen overflow-y-hidden shadow-lg md:p-6 md:flex bg-gray-cool-050 md:h-padded">
            <Nav
               open={navOpen}
               setOpen={setNavOpen}
               items={navItems}
               activePage={activePage}
               setActivePage={setActivePage}
            />
            <div className="relative flex-1 sm:pl-5 sm:pr-5 md:pl-16">
               {/* <div className="absolute z-20 flex items-center w-full pr-5 gap-x-6">
                  <div
                     className={
                        "p-2 duration-75 nav-button text-gray-cool-400 hover:text-indigo-vivid-500  " +
                        (navOpen ? "opened" : "")
                     }
                     onClick={_ => {
                        setNavOpen(!navOpen);
                        console.log(navOpen);
                     }}
                  >
                     <SVG
                        className="fill-current"
                        src={require("../assets/icons/menu.svg")}
                     />
                  </div>

                  <div className="flex self-end justify-self-end gap-x-6">
                     <div className="p-3 md:p-4 nav-button text-gray-cool-400 hover:text-indigo-vivid-500 md:w-16 md:h-16">
                        <SVG
                           className="h-full fill-current"
                           src={require("../assets/icons/bell.svg")}
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
               <Page />
            </div>
         </div>
      </div>
   );
};
