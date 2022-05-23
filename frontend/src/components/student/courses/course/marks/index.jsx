import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Accordion from "./components/Accordion";
import Mark from "./components/Mark";

export default _ => {
   const [c, setActivePage] = useOutletContext();
   useEffect(_ => {
      setActivePage(1);
   }, []);

   return (
      <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 lg:grid-cols-2 xl:pr-64">
         {c.markeditemSet.map(item => (
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
