import React from "react";
import { Link } from "react-router-dom";

export default props => {
   return (
      <div>
         <h1 className="mt-10 -mb-4 text-6xl font-bold tracking-tight text-center md:text-left">
            My Courses
         </h1>
         <div className="mt-10 font-ff">
            <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {props.data.teacher.classSet.map(c => (
                  <Link to={`${c.id}`}>
                     <div className="flex flex-col h-64 p-6 bg-white rounded-md">
                        <h1 className="text-3xl font-bold tracking-tight text-indigo-500">
                           {c.courseId.code + "-" + c.sectionName}
                        </h1>
                        <div className="-mt-1 tracking-wider text-gray-500">
                           {`${props.data.teacher.firstName} ${props.data.teacher.lastName}`}
                        </div>
                        <div className="flex items-end flex-1 text-2xl">
                           {c.courseId.name}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};
