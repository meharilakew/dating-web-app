"use client";

import Content from "./(presentation)/content/page";
import Sidebar from "./(presentation)/sidebar/page";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="absolute top-0 ">
        <Content />
      </div>
    </>
  );
};

export default Dashboard;
