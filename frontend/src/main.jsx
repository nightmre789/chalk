import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";

import StudentApp from "@components/student";
import { StateProvider, store } from "@components/Store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Login from "@components/login";
import "./index.css";
import Student from "./components/student";

const client = new ApolloClient({
   uri: "http://localhost:8000/graphql",
   cache: new InMemoryCache(),
});

const App = _ => {
   const { state } = useContext(store);
   return state.id === -1 ? (
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
            <App />
         </ApolloProvider>
      </StateProvider>
   </React.StrictMode>
);
