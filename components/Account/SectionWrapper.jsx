"use client";

import { useState } from "react";
import AccountInfo from "@/components/Account/AccountInfo";
import PastOrders from "@/components/Account/PastOrders";

function SectionWrapper({ session }) {
  const [tab, setTab] = useState("Account");

  const SectionDisplay = () => {
    if (tab === "Orders") {
      return <PastOrders />;
    } else {
      return <AccountInfo session={session} />;
    }
  };

  return (
    <div className="flex flex-1 flex-col sm:flex-row gap-x-24 my-4 sm:my-12 sm:mb-16">
      <div className="flex sm:flex-col gap-x-2 items-start flex-none gap-y-2">
        <button
          className={`${
            tab === "Account"
              ? "bg-white text-neutral-900"
              : "bg-neutral-900 text-white"
          } w-[140px] py-2 px-4 border-2 border-neutral-900 rounded-lg hover:bg-white hover:text-neutral-900 transition`}
          onClick={() => setTab("Account")}
        >
          Account
        </button>
        <button
          className={`${
            tab === "Orders"
              ? "bg-white text-neutral-900"
              : "bg-neutral-900 text-white"
          } w-[140px] py-2 px-4 border-2 border-neutral-900 rounded-lg hover:bg-white hover:text-neutral-900 transition`}
          onClick={() => setTab("Orders")}
        >
          Past Orders
        </button>
      </div>
      <div className="flex flex-1">
        <SectionDisplay />
      </div>
    </div>
  );
}

export default SectionWrapper;
