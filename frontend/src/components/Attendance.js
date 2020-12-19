import React, { useEffect } from "react";

export default props => {
   useEffect(
      _ => {
         props.setActivePage(4);
      },
      [props]
   );
   return (
      <div className="p-4">
         <div>test</div>
      </div>
   );
};
