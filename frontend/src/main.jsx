import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";

import { StateProvider, Store } from "@components/Store";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import client from "./apollo";
import StudentApp from "@components/student";
import Login from "@components/login";

import "./index.css";

const App = _ => {
   const { state } = useContext(Store);
   return !state.id ? (
      <div className="h-screen pt-10 bg-slate-50">
         <div className="fixed bottom-0 right-0 mb-2 mr-2 text-xl text-white font-ff">
            Copyright Team Mirzey 2020
         </div>
         <Login />
      </div>
   ) : state.accountType === 0 ? (
      <StudentApp />
   ) : (
      <div>test</div>
   );
};

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <StateProvider>
         <ApolloProvider client={client}>
            <Router>
               <App />
            </Router>
         </ApolloProvider>
      </StateProvider>
   </React.StrictMode>
);
