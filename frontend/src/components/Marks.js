import React from "react";

import Accordion from "./Accordion";
import Mark from "./Mark";

export default _ => {
   return (
      <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 md:grid-cols-2 xl:grid-cols-3">
         <Accordion title="Sessional">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
         <Accordion title="Class Participation">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
         <Accordion title="Quizzes">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
         <Accordion title="Assignments">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
         <Accordion title="Sessional 2">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
         <Accordion title="Lab Work">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
         <Accordion title="Final">
            <Mark
               mark={10.65}
               total={15}
               average={9.75}
               min={1.25}
               max={14.5}
            />
         </Accordion>
      </div>
   );
};
