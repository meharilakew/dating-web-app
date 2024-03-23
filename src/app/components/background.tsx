import React from 'react';

const CustomBackgroundComponent = () => {
  return (
    <div className="relative flex flex-row h-screen overflow-hidden bg-pink-100">
      <div className=" bg-[#413088] w-96 h-96  absolute left-0 top-0 rounded-full -translate-x-28 -translate-y-40 blur-[100px] scale-150   "></div>
      <div className=" bg-[#06002B] w-96 h-96  rounded-full absolute inset-x-24 top-0 translate-x-96 -translate-y-20 blur-[96px] scale-150  "></div>
      <div className=" bg-[#974E83] w-96 h-96  rounded-full absolute inset-y-0 top-0 translate-x-8 translate-y-40 blur-3xl scale-150  "></div>
      <div className=" bg-[#D88485] w-96 h-96  rounded-full absolute bottom-0 left-0 -translate-x-36 translate-y-52 blur-3xl scale-150   "></div>
      <div className=" bg-[#EAC5CA] w-96 h-96  rounded-full absolute inset-y-0 right-0 -translate-x-8 translate-y-40 blur-3xl scale-150  "></div>
      <div className=" bg-[#974E83] w-96 h-96  rounded-full absolute right-0 top-0 translate-x-20 -translate-y-36 blur-3xl scale-150   "></div>
      <div className=" bg-[#C45A8A] w-96 h-96  rounded-full absolute right-0 bottom-0 translate-x-24 translate-y-40 blur-3xl scale-150   "></div>
      <div className=" bg-[#FCC4B1] w-96 h-96  rounded-full absolute inset-x-32 bottom-0 translate-x-96 translate-y-40 blur-3xl scale-150  "></div>
    </div>
  );
};

export default CustomBackgroundComponent;
