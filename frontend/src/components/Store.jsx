import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

const initialState = { id: 2198, accountType: 0, user: null };

if (localStorage.getItem("token")) {
   const token = jwtDecode(localStorage.getItem("token"));
   if (token.exp * 1000 < Date.now()) localStorage.removeItem("token");
   else initialState.user = token;
}

const Store = createContext({
   id: 2198,
   accountType: 0,
   user: null,
   login: loginData => {},
   logout: _ => {},
});

const StateProvider = ({ children }) => {
   const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
         case "LOGIN":
            return {
               ...state,
               user: action.payload,
            };
         case "LOGOUT":
            return {
               ...state,
               user: null,
            };
         default:
            return state;
      }
   }, initialState);

   const login = loginData => {
      localStorage.setItem("token", loginData.token);
      dispatch({ type: "LOGIN", payload: loginData });
   };

   const logout = _ => {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
   };

   return (
      <Store.Provider value={{ state, dispatch, login, logout }}>
         {children}
      </Store.Provider>
   );
};

export { Store, StateProvider };
