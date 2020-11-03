import React, { useState, useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import NavItem from "./NavItem";
import Message from "./Message";

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
      TweenMax.to(navSelect, 0.5, {
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
            <div className="flex flex-col flex-1 px-5 overflow-y-auto">
               <div className="flex flex-row-reverse items-center h-24 gap-x-6">
                  <div className="nav-button">
                     <img
                        className="rounded-full"
                        src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                        alt="profile"
                     />
                  </div>
                  <div className="p-3 nav-button text-gray-cool-400 hover:text-indigo-vivid-500">
                     <SVG
                        className="h-full fill-current"
                        src={require("../assets/icons/bell.svg")}
                     />
                  </div>
               </div>
               <div className="flex flex-col flex-1 overflow-y-auto border-t rounded border-gray-cool-200">
                  <div className="bg-white border-b">
                     <div className="h-20 ">top bar</div>
                  </div>
                  {[...Array(50)].map((x, i) => (
                     <Message key={i} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
