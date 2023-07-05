import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AccountHeader from "@/components/Account/AccountHeader";
import SectionWrapper from "@/components/Account/SectionWrapper";
import SignInButton from "@/components/SignInButton";
export default async function page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-10 xl:px-0" >
      <div className="h-full w-full flex flex-col justify-center mt-20">
        {session ? (
          <>
            <AccountHeader session={session} />
            <SectionWrapper session={session} />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
}
