"use client";
import { useEffect } from "react";
import AccountInfo from "@/components/Account/AccountInfo";
import PastOrders from "@/components/Account/PastOrders";
import AccountOverview from "./AccountOverview";

function SectionWrapper({ session, pastOrders, tab }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [tab]);

  const SectionDisplay = () => {
    if (tab === "Orders") {
      return <PastOrders pastOrders={pastOrders} />;
    } else if (tab === "Account") {
      return <AccountInfo session={session} />;
    } else if (tab === "Overview") {
      return <AccountOverview />;
    }
  };

  return (
    <div className="flex flex-1 flex-col sm:flex-row gap-x-8 my-4 sm:m-0">
      <SectionDisplay />
    </div>
  );
}

export default SectionWrapper;
