import React, { useContext } from "react";
import { store } from "./Store";

export default props => {
   const { state, dispatch } = useContext(store);
   return (
      <div className="pt-0 mt-10 bg-white lg:pt-8 md:pt-6">
         <div className="h-64 p-5 text-6xl">No assignments due!</div>
      </div>
   );
};
