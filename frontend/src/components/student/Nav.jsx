import React, { useRef, useEffect, useContext } from "react";
import { gsap, Sine } from "gsap";
import SVG from "react-inlinesvg";
import useWindowSize from "@hooks/useWindowSize";
import { store } from "@components/Store";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";

export default props => {
   let navSlider = useRef(null);
   const refs = props.items.map(_ => useRef(null));
   const size = useWindowSize();
   const { state, dispatch } = useContext(store);

   const logOut = _ => {
      dispatch({ type: "SET_ID", id: { id: -1, accountType: -1 } });
      props.setActivePage(0);
   };

   useEffect(
      _ => {
         const rect = refs[props.activePage].current.getBoundingClientRect();
         gsap.to(navSlider, {
            duration: 0.4,
            css: {
               top: rect.top - 35,
               height: rect.height - 8,
               width: rect.width,
            },
            ease: Sine.easeOut,
         });
      },
      [props.activePage, refs, size.width]
   );

   return (
      <React.Fragment>
         <nav className="fixed flex-col hidden w-1/6 h-full md:flex">
            <div className="flex items-center justify-center w-full h-[15vh]">
               <SVG
                  className="w-full p-3 cursor-pointer fill-current text-slate-900"
                  src="src/assets/images/logo.svg"
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
            <Link to="/">
               <button
                  className="flex flex-col items-center justify-center py-4 pb-24 pl-6 pr-4 text-xl font-semibold text-center text-gray-700 duration-200 cursor-pointer lg:flex-row lg:text-left lg:gap-x-3 hover:text-indigo-600"
                  onClick={logOut}
               >
                  <SVG
                     src="src/assets/icons/door.svg"
                     className="fill-current"
                  />
                  <p className="flex-1 w-full">Sign Out</p>
               </button>
            </Link>
         </nav>
      </React.Fragment>
   );
};
