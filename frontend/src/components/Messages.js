import React, { forwardRef } from "react";
import Message from "./Message";

export default forwardRef((_, ref) => {
   return (
      <div
         ref={ref}
         className="flex flex-col flex-1 border-t border-gray-cool-200"
      >
         <div className="bg-white border-b">
            <div className="h-20">top bar</div>
         </div>
         {[...Array(50)].map((x, i) => (
            <Message key={i} />
         ))}
      </div>
   );
});
