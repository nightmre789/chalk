import React from "react";
import Message from "./Message";

export default _ => {
   return (
      <div className="flex flex-col flex-1 border-t border-gray-cool-200">
         <div className="bg-white border-b">
            <div className="h-20">top bar</div>
         </div>
         {[...Array(50)].map((x, i) => (
            <Message key={i} />
         ))}
      </div>
   );
};
