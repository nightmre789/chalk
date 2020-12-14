import React from "react";
import Announcement from "./Announcement";

export default _ => {
   return (
      <div className="flex-row-reverse mt-2 lg:flex gap-x-6">
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
