import SignInButton from "../SignInButton";

function AccountHeader({ session }) {
  return (
    <div className="flex">
      {session ? (
        <div className="flex w-full justify-between flex-col md:flex-row bg-white p-4">
          <div className="flex sm:items-center flex-row text-base items-center">
            <h2 className="font-light text-base">Logged in as</h2>
            <p className="font-semibold text-xl ml-2">{session?.user?.name}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <SignInButton />
          </div>
        </div>
      ) : (
        <div>
          <SignInButton />
        </div>
      )}
    </div>
  );
}

export default AccountHeader;
