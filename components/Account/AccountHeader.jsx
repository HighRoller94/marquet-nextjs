import SignInButton from "../SignInButton";

function AccountHeader({ session }) {
  return (
    <div className="flex">
      {session ? (
        <div className="flex w-full justify-between flex-row">
          <div className="flex sm:items-center flex-col sm:flex-row">
            <h2 className="font-medium">You are logged in as:</h2>
            <p className="font-semibold text-xl sm:ml-4">{session?.user?.name}</p>
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
