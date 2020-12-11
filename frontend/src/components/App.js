import React, { useState, useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import SVG from "react-inlinesvg";

import Nav from "./Nav";
import Messages from "./Messages";

export default _ => {
   let appRef = useRef(null);
   useEffect(_ => TweenMax.to(appRef, 0, { css: { visibility: "visible" } }));

   const [navOpen, setNavOpen] = useState(false);

   return (
      <div
         className="fixed w-full h-screen overflow-y-hidden bg-gray-cool-200 md:p-4"
         ref={e => (appRef = e)}
      >
         <div className="h-screen p-6 overflow-y-hidden shadow-lg md:flex bg-gray-cool-050 md:h-padded">
            <Nav open={navOpen} setOpen={setNavOpen} />
            <div className="flex flex-col flex-1 px-5">
               <div className="z-20 flex items-center h-24 gap-x-6">
                  <div
                     className={
                        "p-2 duration-75 nav-button text-gray-cool-400 hover:text-indigo-vivid-500 md:hidden " +
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
                  <div className="flex justify-end flex-1 gap-x-6">
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
               </div>
               <Messages />
            </div>
         </div>
      </div>
   );
};
