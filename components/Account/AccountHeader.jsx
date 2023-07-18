import Image from "next/image";
import { AiOutlineRollback } from "react-icons/ai";
function AccountHeader({ session, tab, resetTab }) {
  return (
    <div className="flex justify-center items-center">
      {tab === "Overview" ? (
        <div className="flex flex-col justify-center items-center bg-white w-full py-6">
          <div className="w-20 h-20 relative md:w-20 md:h-20">
            <Image
              src={session?.user.image}
              alt="Profile Image"
              className=" rounded-full"
              fill
            />
          </div>
          <div className="flex sm:items-center flex-col text-base items-center mt-4">
            <p className="text-lg">
              Logged in as
              <span className="font-semibold ml-2">{session?.user?.name}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full flex p-4 bg-white justify-center items-center relative">
          <AiOutlineRollback
            className="left-4 absolute md:hidden"
            size={24}
            onClick={resetTab}
          />
          <h1 className="leading-7 text-lg sm:text-2xl uppercase tracking-wide text-neutral-800 font-extrabold">
            {tab}
          </h1>
        </div>
      )}
    </div>
  );
}

export default AccountHeader;
