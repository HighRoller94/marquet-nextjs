"use client";

import { useState } from "react";
import AccountInfo from "@/components/Account/AccountInfo";
import PastOrders from "@/components/Account/PastOrders";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
function SectionWrapper({ session, pastOrders }) {
  const [tab, setTab] = useState("Account");

  const SectionDisplay = () => {
    if (tab === "Orders") {
      return <PastOrders pastOrders={pastOrders} />;
    } else {
      return <AccountInfo session={session} />;
    }
  };

  return (
    <div className="flex flex-1 flex-col sm:flex-row gap-x-4 my-4 sm:my-10 sm:mb-16">
      <div className="flex sm:flex-col gap-x-2 items-start flex-none gap-y-2">
        <div
          className={`h-[60px] flex items-center justify-center w-52 hover:underline cursor-pointer rounded text-white ${
            tab === "Account" ? "bg-neutral-700" : " bg-neutral-400"
          }`}
          onClick={() => setTab("Account")}
        >
          <div className="flex w-8/12 gap-3">
            <FaUserAlt />
            <p className="uppercase tracking-widest text-sm font-bold">
              Account
            </p>
          </div>
        </div>
        <div
          className={`h-[60px] flex items-center justify-center w-52 hover:underline cursor-pointer rounded text-white ${
            tab === "Orders" ? "bg-neutral-700" : " bg-neutral-400"
          }`}
          onClick={() => setTab("Orders")}
        >
          <div className="flex w-8/12 gap-3">
            <BsFillBookmarkFill className="mt-0.5" />
            <p className="uppercase tracking-widest text-sm font-bold">
              Past Orders
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <SectionDisplay />
      </div>
    </div>
  );
}

export default SectionWrapper;
