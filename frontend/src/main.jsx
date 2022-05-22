import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "virtual:fonts.css";

import StudentApp from "@components/student";
import { StateProvider } from "@components/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <StateProvider>
         <StudentApp />
      </StateProvider>
   </React.StrictMode>
);
