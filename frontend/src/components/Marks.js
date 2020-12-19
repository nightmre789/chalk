import React, { useEffect } from "react";

import Accordion from "./Accordion";
import Mark from "./Mark";

export default props => {
   useEffect(
      _ => {
         props.setActivePage(1);
      },
      [props]
   );
   return (
      <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 lg:grid-cols-2 xl:pr-64">
         {props.items.map(item => (
            <Accordion title={item.name}>
               <Mark
                  mark={item.mark ? item.mark.mark : "-"}
                  total={item.total}
                  average={item.avg ? item.avg : "-"}
                  min={item.min ? item.min : "-"}
                  max={item.max ? item.max : "-"}
                  weightage={item.weightage}
               />
            </Accordion>
         ))}
      </div>
   );
};
