import React from "react";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";
import moment from "moment";

import PieLabel from "./PieLabel";
import Announcement from "./Announcement";

export default props => {
   let total = 0;
   const progressData = props.items.map(item => {
      total += item.weightage;
      return {
         name: item.name,
         value: item.weightage,
         color: item.name.includes("Sessional")
            ? "#0088FE"
            : item.name.includes("Assignment")
            ? "#00C49F"
            : "#FFBB28",
      };
   });

   progressData.push({
      name: "Unfinished",
      value: 100 - total,
      color: "#fff",
   });

   const attendanceData = [
      {
         name: "Attended",
         value: props.attendance.attended,
         color: "#00C49F",
      },
      {
         name: "Missed",
         value: props.attendance.total - props.attendance.attended,
         color: "#e9695f",
      },
   ];

   const messages = props.classQ.messageSet;

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
                        {progressData.map(item => (
                           <Cell fill={item.color} />
                        ))}
                        <Label
                           content={<PieLabel label={`${total}%`} />}
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

         <div className="flex flex-col-reverse flex-1 rounded-sm gap-y-3 lg:mt-0">
            {messages.map(m => (
               <Announcement
                  senderImage="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  senderName={props.name}
                  time={moment(m.sent).fromNow()}
                  title={m.title}
                  content={m.content}
               />
            ))}
         </div>
      </div>
   );
};
