import React, { createContext, useReducer } from "react";

const initialState = { id: 2197, accountType: 0 };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
   const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
         case "SET_ID":
            const newState = action.id;
            return newState;
         default:
            throw new Error();
      }
   }, initialState);

   return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
