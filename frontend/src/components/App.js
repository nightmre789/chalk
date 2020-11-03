import React, { useState, useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import NavItem from "./NavItem";

import SVG from "react-inlinesvg";

export default _ => {
   const [activePage, setActivePage] = useState(0);
   const [navItems] = useState([
      { label: "Dashboard", icon: "dashboard" },
      { label: "My Courses", icon: "courses" },
      { label: "Messages", icon: "messages" },
      { label: "Registration", icon: "registration" },
      { label: "Fees", icon: "fees" },
   ]);

   let appRef = useRef(null);
   let navSelect = useRef(null);

   useEffect(_ => {
      TweenMax.to(appRef, 0, { css: { visibility: "visible" } });
      console.log(navSelect);
   }, []);

   const navClick = (e, index) => {
      setActivePage(index);
      const rect = e.currentTarget.getBoundingClientRect();
      TweenMax.to(navSelect, 0.4, {
         css: {
            top: rect.top + 6,
            height: rect.height - 12,
            width: rect.width,
         },
         ease: Power3.easeOut,
      });
   };

   return (
      <div
         className="h-screen overflow-y-hidden bg-gray-cool-200 md:p-4"
         ref={e => (appRef = e)}
      >
         <div className="flex h-screen p-6 overflow-y-hidden shadow-lg bg-gray-cool-050 md:h-padded">
            <nav className="flex flex-col w-1/6">
               <SVG
                  className="w-full p-3 pt-4 cursor-pointer fill-current text-gray-cool-900"
                  src={require("../assets/images/logo.svg")}
               />
               <ul className="flex-1 pr-4 gap-y-1 md:pt-2 lg:pt-4">
                  <div
                     className="absolute w-1/6 h-10 ml-2 bg-white rounded-md shadow-lg xl:h-12"
                     ref={e => (navSelect = e)}
                  ></div>
                  {navItems.map((item, index) => (
                     <NavItem
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        active={index === activePage}
                        click={e => navClick(e, index)}
                     />
                  ))}
               </ul>
            </nav>
            <div className="flex flex-col flex-1 pl-5 overflow-y-auto">
               <div className="flex-none h-24"></div>
               <div className="flex-1 overflow-y-auto"></div>
            </div>
         </div>
      </div>
   );
};
