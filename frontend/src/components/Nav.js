import React, { useState, useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import SVG from "react-inlinesvg";

import NavItem from "./NavItem";

export default props => {
   const [activePage, setActivePage] = useState(0);
   const [navItems] = useState([
      { label: "Dashboard", icon: "dashboard" },
      { label: "My Courses", icon: "courses" },
      { label: "Messages", icon: "messages" },
      { label: "Registration", icon: "registration" },
      { label: "Fees", icon: "fees" },
   ]);

   let navSlider = useRef(null);
   const refs = navItems.map(_ => useRef(null));

   useEffect(
      _ => {
         const rect = refs[activePage].current.getBoundingClientRect();
         TweenMax.to(navSlider, 0.5, {
            css: {
               top: rect.top + 6,
               height: rect.height - 12,
               width: rect.width,
            },
            ease: Power3.easeOut,
         });
         console.log(refs[activePage]);
      },
      [activePage, refs]
   );

   return (
      <nav className="flex-col hidden w-1/6 md:flex">
         <div className="flex items-center justify-center w-full h-logo">
            <SVG
               className="w-full p-3 cursor-pointer fill-current text-gray-cool-900"
               src={require("../assets/images/logo.svg")}
            />
         </div>
         <ul className="flex-1 pr-4 gap-y-1 md:pt-2 lg:pt-4">
            <div
               className="absolute w-1/6 h-10 ml-2 bg-white rounded-md shadow-lg xl:h-12"
               ref={e => (navSlider = e)}
            ></div>
            {navItems.map((item, index) => (
               <NavItem
                  id={"item" + index}
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  active={index === activePage}
                  click={_ => setActivePage(index)}
                  ref={refs[index]}
               />
            ))}
         </ul>
      </nav>
   );
};
