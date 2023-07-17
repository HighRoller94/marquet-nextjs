import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AccountHeader from "@/components/Account/AccountHeader";
import SectionWrapper from "@/components/Account/SectionWrapper";
import SignInButton from "@/components/SignInButton";
import { getOrdersByEmail } from "@/lib/prisma/orders";
import Dashboard from "@/components/Account/Dashboard";

export default async function page() {
  const session = await getServerSession(authOptions);
  const pastOrders = await getOrdersByEmail(session?.user.email);

  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-6 xl:px-0">
      <div className="h-full w-full flex flex-col justify-center mt-6 md:mt-8">
        <Dashboard pastOrders={pastOrders} />
      </div>
    </div>
  );
}
