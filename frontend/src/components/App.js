import React, { useState } from "react";
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

   return (
      <div className="h-screen overflow-y-hidden bg-blue-800 -to-r md:p-5">
         <div className="flex h-screen overflow-y-hidden shadow-lg md:rounded-ui md:h-padded">
            <nav className="flex flex-col w-1/6 bg-gray-200">
               <SVG
                  className="w-full p-3 pt-4 text-gray-800 border-r-2 border-gray-300 cursor-pointer fill-current"
                  src={require("../assets/images/logo.svg")}
               />
               <ul className="pr-4 border-r-2 border-gray-300 gap-y-1 md:pt-2 lg:pt-4">
                  {navItems.map((item, index) => (
                     <NavItem
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        active={index === activePage}
                        click={_ => setActivePage(index)}
                     />
                  ))}
               </ul>
               <div className="flex-1 border-r-2 border-gray-300"></div>
               <div className="flex items-center py-4 pl-6 font-semibold text-center text-gray-200 border-r-2 border-teal-400 cursor-pointer bg-gradient-to-r from-blue-800 to-teal-300 group lg:text-left lg:gap-x-3 hover:bg-blue-800">
                  <SVG
                     src={require("../assets/icons/dashboard.svg")}
                     className="fill-current"
                  />
                  <p className="flex-1">Sign out</p>
               </div>
            </nav>
            <div className="flex flex-col flex-1 pl-5 overflow-y-auto bg-white">
               <div className="flex-none h-24"></div>
               <div className="flex-1 overflow-y-auto"></div>
            </div>
         </div>
      </div>
   );
};
