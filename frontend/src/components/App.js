import React from "react";
import NavItem from "./NavItem";

export default _ => {
   return (
      <div className="h-screen overflow-y-hidden bg-gradient-to-r md:p-5 from-pink-300 to-purple-500">
         <div className="flex h-screen overflow-y-hidden shadow-lg md:rounded-ui md:h-padded">
            <nav className="flex flex-col flex-none w-1/6 px-5 bg-gray-200 border-r-2 border-gray-300">
               <svg
                  className="h-24 px-0 pt-4 text-pink-500 fill-current md:px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 501.24 227.93"
               >
                  <title>Logo</title>j
                  <g id="Layer_1" data-name="Layer 1">
                     <path d="M71.74,58.66C25.06,62.12,9.86,136.31,40.12,173.57,71.59,161.74,69.81,117.82,93.78,106c1.74,42.51-31.54,108.2-79.48,74.35-.76-2.1,2.4-1.42,3.05-1.13-3.23-4.72-6.86-9.38-9.44-15-1.85-.09.89,2.89-.75,2.77-3.22.14-.6-3.55-1.76-5.59-.34-2-2.14.57-2.77-2-8-39,.61-114.72,50.47-119.74,20.12-2.2,44.34,16.21,30.69,37.39C76.23,75.55,79.57,61.79,71.74,58.66Z" />
                     <path d="M131.43,166.41c-.58-.26-.29-1.24-1.28-1.33-1.17,10.34-16.09,15.17-25,5.69-8.66-40.58,16-104.36,26.53-137.72,2.45-.38,2.87-2.75,3.85-4.66-1.17-.31-1.23.28-1.3,1.08C140.51,19.82,146.25,5.69,158.44,0c-.1,3.2,5.51,1.12,4,4.19.92.89,1.2.11,3,.08C164.24,11,173.26,9,172.94,14.61c-3-.28-5.09-1.48-7.44-2.1C153.39,23.83,143.92,62.92,138,79.24c-1-.29-.72-.87-.85-1.69-3,19-10.19,33.8-12.21,53.3,21.78-28.9,44.56-57.71,84.38-71.06a35.2,35.2,0,0,0,10.41.37c36.68,15.89-5.5,63.16,1.59,94.76.49,3.26,3.28,5.73,1.89,9.82-4.81,4.17-12.74-1.19-18.44-2.53.24-4.8-6.52-7.64-7-13.51a1.8,1.8,0,0,0-1.2,2.1c-8.12-31.29,6.06-47.64,16.22-74.61C170.21,91.09,147.9,132,131.43,166.41Zm-25.88,1.79c.09,1.22,1.8,4.39,3.38,2.53C107,170.35,107.12,168.55,105.55,168.2Zm33.81-39.42c-7.74,11.93-15.82,21-17.44,31.92C126.8,149.3,135.39,139.06,139.36,128.78Z" />
                     <path d="M303.21,167.19c0,1.8-1.2,2.8-2.4,3.8-16.8,1.6-20-13.6-20.4-25.6-5.2,4.4-9.8,12.8-18.2,16.6-10.6.2-19-1.4-25.6-5-6.4-34.6,12.2-91,60.4-88.2,4.4-7.4,3-13.19,15-7.6C307,83,285,125.59,303.21,167.19Zm-9.8-94c-28.2,14-36,43.4-39.4,72.8C275.21,127.19,288.61,99,293.41,73.19Z" />
                     <path d="M427.81,100.69c-1.94,2.88.27,2.88-.28,4.56-4.43,0-2.49,2.17-6.09,4.33,3.88-1,6.37.48,9.14-1.44-1.39-1.92-1.94,1.44-4.16,1,12.46-8.89,22.71-13.22,37.93-20.19-.55,1.44-2.21,1.68-3.6,2.16,4.16.48-1.66,3.37-5,3.61,0-1.45,3.32-.72,3.32-2.17-6.09,6.25-18.27,12-28.51,17.55,13.56-3.6,25.19-11.54,40.42-16.59-19.94,14.19-39,22.6-60.08,36.06,10.8,5.05,25.75,7,37.93,11.54-4.15-3.6-10.25-2.88-13.84-6.25,23.53,10.1,76.41,15.63,64.5,34.62-17.72-10.58-37.37-14.18-58.41-20.43-.28-1,.83-1.21,1.66-1.21-3.6-1.44-3.88-1.44-7.75-.48.55-1.2-.84-1.2-1.67-1.44.56-3.36-17.44-7.21-21.31-5.53-4.16-3.36-2.22-.48-7.76-3.6-11.07,1.68-11.62,4.32-21.59,5.28.55,15.63-14.4,46.88,3.32,58.42-1.66,3.61-6.64.72-11.07,1,3.6.72.83,2.89,4.7,3.61-31-1.44-31.28-39.19-24.91-57.7,0-41.1,22.7-73.8,44.85-103.61,2.21.72,2.21,1.2,3.6,1.44,2.77-5,8.86-7.21,10-13.46,6.93-1.2,10-10.09,21.88-10.09-1.39.72-2.5,3.84,2.49,2.88-1.94,2.88-1.39,6.49-6.65,8.9.56,2.16,2.77-1,2.77,1-16.06,21.63-34.05,54.33-44.57,82C404.27,114.63,412,103.81,427.81,100.69Zm-10.19,4.55c-2.88-.91-6,1.59-7.59,3.41C414,108.42,416.58,107.51,417.62,105.24Zm9.43-80.92c-3.67,3.64-10.47,8.19-11,12C418.67,32.05,426.26,28.41,427.05,24.32Zm1,70c2.36-.91,1.84-3.86,5.76-4.09C431.76,91.6,432.28,94.33,428.09,94.33Zm19.64,7.5c0,.91-4.19,3.41-7.33,4.09C442.49,104.33,444.32,102.74,447.73,101.83Z" />
                     <path d="M197.26,179.64c-.08.92-3.54.87-1.32,2-6.27,3.19-15.81,1.25-22.65,3,6.65,3.31,17.85-.85,28.31,1.16-26.45,7.07-45.5,0-71.57,5.22-1.17.14-.3.9.56,1.66-36.76,6-79.65,13.57-112.28,31.22.11,1.4,2,1.55.84,3.77C13.5,229,8.71,225.39,8.61,221,51.14,186.83,112,180.27,175.3,176.92c-1,1.07-5.27-.43-3.42,2.26C179.09,181.39,188.38,178,197.26,179.64ZM170,176.94c-.34,1.36-1,.85-2.14.75a3.4,3.4,0,0,0,.21,3c-3.34,1.35-8.31,0-10.36,2.39,1.9-.54,1.59,3.13,2.89,1.39,4.88-.29,8.34-.24,14.95-2-3-.24-3.92-2.86-5.51-.45C168.52,180.75,171.92,178.72,170,176.94Zm36.27,5.52c5.54-5.55,16.39.19,26.29-2.23.59-1.57-3.44-.28-1.4-2.66,1.76,1.07,2.83-.69,4.84.17-.14-1.17-1.55-.82-2.89-1.39,32.67-1.25,100.69-5.38,117,29.69-.47,5.73-1.51,10-7.48,9.55-18.1-27.13-77.08-23.42-105.26-26.19-.5-2.35-.75-2.14-4-2.18,0,.46.88.54,1.8.61-8.07-3-20.94-1-31.21-2.56.21-2.52,8.61-.68,11.72-2C215.21,183.19,207.73,181.43,206.26,182.46Zm13.54,1.11c4.36.36,4.65,2.46,7.17-.1C224.68,183.28,220.47,181.08,219.8,183.57Zm24.45-2.38c5.72.7,13.75,1.36,15.64.82C254.17,181.31,248.74,179.94,244.25,181.19Z" />
                     <path d="M340,177.2c-.07,2.39,1.61-.56,1.35,1.83-2-1.45-5,.67-6.57-1.37,3.4.09,8.05-1.59,6.71-3.83-.66,2.19-3.68,2.71-6.88,2.82-4.75-1.93-4-8.91-6.66-12.78.31,3.21,2.58,8.07,2.13,10.06-3.11-3.49-3.95-9.31-6.23-14-.51,4.18,1.81,7,.93,10-8-8-5.76-24-7.5-33.61-.88,3,0,7-1.06,9.78-.35-9.42.28-18,2.49-25.75-.07,2.49-1.95,8.4-.13,10-.1-.47.75-1.2,1.29-1.18.76,1.62-.29,3.59,1.07,5,2,.85.69-3.18,2.24-1.34-.37,6.39.37,8.41.19,15,2.22-.54,1.57,1.44,2.77,1.47.58-7-1.17-16,2.6-22.53-.44,1.39-.66,2.38.92,3.22-.52-3.21,1.78-6.75.45-9.39.16,1.41-.26,2.19-1.07,2.57,1.78-6.75,0-16.4,5.93-19.84,1.25,13-9.85,31.54-4,53.71-1.17-31.05,8.37-51,14.47-76.84-2-1.26-1.65,1.75-2.22.54.26-2.2,1.82-.55,2.26-2.14,5.16-16.72,15.51-37.24,23-56.87-3.95.57-10.13-1.44-13-5.12C339.42,41.09,327.81,75,320,97.83c-4.51,26.29-17.54,57.15,5.4,82,1.44-1.56,6.53,2.58,10.95,2.1,1.87-2.55,10.07-2.53,8.76-5.77C343,178.68,342.63,177.27,340,177.2ZM320.4,103.84c2,1.06,1.33,2.64-1.27,2.57C318.38,104.59,321,105.46,320.4,103.84Zm2.21,66.49c2,.45,2.33,2.66,3.3,4.09C324.89,175,323.18,171.74,322.61,170.33Zm5.89,4.16c4.16,1.71,2.53,2.86,6.29,4.37C332.37,179.59,329.25,176.51,328.5,174.49Zm4.66,5.52c.22-1,3-.12,4.21-.29A3.54,3.54,0,0,1,333.16,180Z" />
                     <path d="M369.28,19.87c.52-1.38,1-2.74,1.5-4.11-1.71-3.64-6.47-5-11.49-4.5-.88,1.19-1.74,2.43-2.6,3.68C359.48,18.48,363.92,20.37,369.28,19.87Z" />
                     <path d="M319.47,130.83a1.58,1.58,0,0,1-.85-.41C318.66,130.64,318.9,130.81,319.47,130.83Z" />
                     <path d="M332.61,111c1-1.37.7-3.78,1.34-5.16A3.7,3.7,0,0,0,332.61,111Z" />
                     <path d="M323.6,148.54a10.3,10.3,0,0,0,.13,2.41,3.33,3.33,0,0,0,1.81-.35c0,.4,0,1,.78,1C326.16,150,324.58,149.37,323.6,148.54Z" />
                  </g>
               </svg>
               <div className="flex-1 pt-6">
                  <ul className="flex flex-col gap-y-1">
                     <NavItem label="Dashboard" icon="dashboard" />
                     <NavItem label="My Courses" icon="courses" active />
                     <NavItem label="Messages" icon="messages" />
                     <NavItem label="Registration" icon="registration" />
                     <NavItem label="Fees" icon="fees" />
                  </ul>
               </div>
            </nav>
            <div className="flex flex-col flex-1 pl-5 overflow-y-auto bg-gray-100">
               <div className="flex-none h-24">TOP</div>
               <div className="flex-1 overflow-y-auto">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain. These cases are perfectly simple
                  and easy to distinguish. In a free hour, when our power of
                  choice is untrammelled and when nothing prevents our being
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided. But in certain circumstances and owing
                  to the claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue; and equal blame
                  belongs to those who fail in their duty through weakness of
                  will, which is the same as saying through shrinking from toil
                  and pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed and every
                  pain avoided. But in certain circumstances and owing to the
                  claims of duty or the obligations of business it will
                  frequently occur that pleasures have to be repudiated and
                  annoyances accepted. The wise man therefore always holds in
                  these matters to this principle of selection: he rejects
                  pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.
               </div>
            </div>
         </div>
      </div>
   );
};
