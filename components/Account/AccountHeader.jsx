import SignInButton from "../SignInButton";

function AccountHeader({ session }) {
  return (
    <div className="flex">
      {session ? (
        <div className="flex w-full justify-between flex-row bg-white p-4">
          <div className="flex sm:items-center flex-col sm:flex-row text-base">
            <h2 className="font-medium">Logged in as</h2>
            <p className="font-semibold sm:ml-2">{session?.user?.name}</p>
          </div>
          <div>
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
