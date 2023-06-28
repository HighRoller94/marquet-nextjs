import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/dashboard");
  }

  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-10 xl:px-0">
      <h2 className="mt-4 font-medium">You are logged in as:</h2>
      <p className="mt-4">{session?.user?.name}</p>
    </div>
  );
}
