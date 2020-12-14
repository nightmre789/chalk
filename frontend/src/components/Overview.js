import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

import PieLabel from "./PieLabel";
import Announcement from "./Announcement";

export default _ => {
   const progressData = [
      { name: "Class Participation", value: 5 },
      { name: "Quizzes", value: 15 },
      { name: "Assignments", value: 10 },
      { name: "Sessionals", value: 15 },
      { name: "Unfinished", value: 60 },
   ];
   const attendanceData = [
      { name: "Attended", value: 12, color: "#00C49F" },
      { name: "Missed", value: 1, color: "#e9695f" },
   ];
   const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#fff"];

   return (
      <div className="flex-row-reverse mt-2 lg:flex gap-x-6">
         <div className="relative">
            <div className="flex items-center justify-center max-w-full pt-8 bg-white rounded-sm lg:block lg:w-64">
               <div>
                  <h1 className="text-2xl text-center text-gray-500 font-ff">
                     Progress
                  </h1>
                  <PieChart width={256} height={256}>
                     <Pie
                        data={progressData}
                        cy={90}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                     >
                        {progressData.map((_, index) => (
                           <Cell fill={colors[index % colors.length]} />
                        ))}
                        <Label
                           content={<PieLabel label="40%" />}
                           offset={0}
                           position="center"
                        />
                     </Pie>

                     <Tooltip />
                  </PieChart>
               </div>
               <div>
                  <h1 className="text-2xl text-center text-gray-500 font-ff">
                     Attendance
                  </h1>
                  <PieChart width={256} height={256}>
                     <Pie
                        data={attendanceData}
                        cy={90}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                     >
                        {attendanceData.map((item, index) => (
                           <Cell fill={item.color} />
                        ))}
                        <Label
                           content={
                              <PieLabel
                                 label={
                                    Math.round(
                                       (attendanceData[0].value /
                                          (attendanceData[1].value +
                                             attendanceData[0].value)) *
                                          100
                                    ) + "%"
                                 }
                              />
                           }
                           offset={0}
                           position="center"
                        />
                     </Pie>

                     <Tooltip />
                  </PieChart>
               </div>
            </div>
         </div>

         <div className="flex flex-col flex-1 rounded-sm gap-y-3 lg:mt-0">
            <Announcement
               senderImage="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
               senderName="Dr. Zulfiqar Memon"
               time="4 hours"
               title="Welcome to CS309!"
               content="This course is a study of database models including the
                  hierarhical, networ, relational and object oriented models and
                  the examination of such practical issues as database design,
                  setup, and manipulation. Other selected topics include data
                  integrity, data seurity, backup and recovery procedures,
                  database administration, etc. Several programming projects are
                  assigned involving the use of a database management system.
                  Prerequisite: CS 209."
            />
            <Announcement
               senderImage="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
               senderName="Dr. Zulfiqar Memon"
               time="4 hours"
               title="Welcome to CS309!"
               content="This course is a study of database models including the
                  hierarhical, networ, relational and object oriented models and
                  the examination of such practical issues as database design,
                  setup, and manipulation. Other selected topics include data
                  integrity, data seurity, backup and recovery procedures,
                  database administration, etc. Several programming projects are
                  assigned involving the use of a database management system.
                  Prerequisite: CS 209."
            />
            <Announcement
               senderImage="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
               senderName="Dr. Zulfiqar Memon"
               time="4 hours"
               title="Welcome to CS309!"
               content="This course is a study of database models including the
                  hierarhical, networ, relational and object oriented models and
                  the examination of such practical issues as database design,
                  setup, and manipulation. Other selected topics include data
                  integrity, data seurity, backup and recovery procedures,
                  database administration, etc. Several programming projects are
                  assigned involving the use of a database management system.
                  Prerequisite: CS 209."
            />
         </div>
      </div>
   );
};
