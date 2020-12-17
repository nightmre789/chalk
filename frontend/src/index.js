import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./style/tailwind.output.css";
import * as serviceWorker from "./serviceWorker";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
   uri: "http://localhost:8000/graphql",
   cache: new InMemoryCache(),
});

client
   .query({
      query: gql`
         query {
            campuses {
               name
            }
         }
      `,
   })
   .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
