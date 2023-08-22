"use client";

import { FaGoogle } from 'react-icons/fa'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useSession, signIn, signOut } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button
          className="gap-4 p-4 w-full cursor-pointer bg-white text-neutral-500 hover:bg-neutral-200 border-b-2 border-neutral-200  mx-auto mt-1 md:mt-2 text-base capitalize flex items-center"
          onClick={() => signOut()}
        >
          <RiLogoutBoxLine size={20}/>
          Sign Out
        </button>
      ) : (
        <button
          className="flex items-center justify-center rounded uppercase tracking-widest font-bold gap-x-4 w-fit border-stone-300 px-5 py-3 text-sm  bg-neutral-900 text-neutral-50 outline-none border-none hover:opacity-90 "
          onClick={() => signIn()}
        >
          <FaGoogle size={20}/>
          Sign in with Google
        </button>
      )}
    </>
  );
};

export default SignInButton;
