"use client";

import SideBar from "@/app/components/SideBar";
import React, { useState } from "react";
import Dashboard from "./tabs/Dashboard";
import Profile from "./tabs/Profile";
import Jobs from "./tabs/Jobs";
import Messages from "./tabs/Messages";
import Settings from "./tabs/Settings";

const page = () => {
  const [activeTab, setActiveTab] = useState("Chart");
  const swithTabs = (tab) => {
    switch (tab) {
      case "Dashboard":
        return <Dashboard />;
      case "Profile":
        return <Profile />;
      case "Jobs":
        return <Jobs />;
      case "Messages":
        return <Messages />;
      case "Settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <main className="w-full h-[max-content] flex items-center justify-between">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className=" w-full h-full flex flex-col items-center justify-center overflow-hidden overflow-y-scroll ">
        {swithTabs(activeTab)}
      </div>
    </main>
  );
};

export default page;
