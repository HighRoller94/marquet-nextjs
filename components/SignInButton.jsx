"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button
          className="rounded uppercase tracking-widest font-semibold w-fit border-stone-300 px-4 py-2 text-sm  bg-neutral-900 text-neutral-50 outline-none border-none hover:opacity-90"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="rounded uppercase tracking-widest font-semibold w-fit border-stone-300 px-4 py-2 text-sm  bg-neutral-900 text-neutral-50 outline-none border-none hover:opacity-90"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInButton;
