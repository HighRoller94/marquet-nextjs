"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import AiOutlineLogin from "react-icons/ai";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button
          className="rounded-md border w-fit border-stone-300 px-3 py-1 text-sm dark:border-stone-600"
          onClick={() => signOut()}
        >
          <span>Sign Out</span>
        </button>
      ) : (
        <button
          className="rounded-md border w-fit border-stone-300 px-3 py-1 text-sm dark:border-stone-600"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInButton;
