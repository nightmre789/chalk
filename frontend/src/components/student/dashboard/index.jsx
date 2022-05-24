import React, { useContext, useEffect } from "react";
import { store } from "@components/Store";
import { motion } from "framer-motion";

export default props => {
   const { state, dispatch } = useContext(store);
   useEffect(_ => {
      props.setActivePage(0);
   }, []);
   return (
      <motion.div
         className="h-full mt-10 bg-white lg:pt-8 md:pt-6"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         <div className="h-64 p-5 text-6xl">No assignments due!</div>
      </motion.div>
   );
};
