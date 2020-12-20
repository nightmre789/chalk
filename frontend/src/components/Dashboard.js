import React, { useContext } from "react";
import { store } from "./Store";

export default props => {
   const { state, dispatch } = useContext(store);
   return <div className="pt-0 bg-white lg:pt-8 md:pt-6">test</div>;
};
