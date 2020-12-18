import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import SVG from "react-inlinesvg";
import useWindowSize from "../hooks/useWindowSize";

import NavItem from "./NavItem";

export default props => {
   let navSlider = useRef(null);
   const refs = props.items.map(_ => useRef(null));
   const size = useWindowSize();

   useEffect(
      _ => {
         const rect = refs[props.activePage].current.getBoundingClientRect();
         TweenMax.to(navSlider, 0.5, {
            css: {
               top: rect.top - 35,
               height: rect.height - 12,
               width: rect.width,
            },
            ease: Power3.easeOut,
         });
      },
      [props.activePage, refs, size.width]
   );

   return (
      <nav className="fixed flex-col hidden w-1/6 md:flex">
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
            {props.items.map((item, index) => (
               <NavItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  path={item.path}
                  active={index === props.activePage}
                  click={_ => props.setActivePage(index)}
                  ref={refs[index]}
               />
            ))}
         </ul>
      </nav>
   );
};
