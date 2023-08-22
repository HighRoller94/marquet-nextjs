"use client";

import { useState } from "react";

import AccountHeader from "./AccountHeader";
import SectionWrapper from "./SectionWrapper";
import DashboardSidebar from "./DashboardSidebar";
import Login from "./Auth/Login";

import { useSession } from "next-auth/react";

const Dashboard = ({ pastOrders }) => {
  const [tab, setTab] = useState("Overview");
  const { data: session } = useSession();

  const resetTab = () => {
    setTab("Overview");
  };

  return (
    <>
      {session ? (
        <div className="flex flex-col mb-6 lg:mb-4">
          <AccountHeader session={session} tab={tab} resetTab={resetTab} />
          {tab === "Overview" ? (
            <div className="md:flex md:flex-row w-full h-full my-2 md:my-8 md:gap-6">
              <DashboardSidebar tab={tab} setTab={setTab} resetTab={resetTab} />
              <div className="hidden md:flex w-full">
                <SectionWrapper
                  session={session}
                  pastOrders={pastOrders}
                  tab={tab}
                />
              </div>
            </div>
          ) : (
            <div className="md:flex md:flex-row my-2 md:my-8 md:gap-6">
              <div className="hidden md:flex">
                <DashboardSidebar tab={tab} setTab={setTab} resetTab={resetTab}/>
              </div>
              <SectionWrapper
                session={session}
                pastOrders={pastOrders}
                tab={tab}
              />
            </div>
          )}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Dashboard;
