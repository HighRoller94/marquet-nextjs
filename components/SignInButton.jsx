"use client";

import { signIn, useSession } from "next-auth/react";
import { RiAccountCircleLine } from "react-icons/ri";

const SignInButton = () => {

  return (
    <>
      <button
        className="w-full"
        onClick={(e) => {
            e.preventDefault()
            signIn('google', {
              callbackUrl: `${window.location.origin}`,
            })
          }}
      >
        <RiAccountCircleLine />
      </button>
    </>
  );
};

export default SignInButton;
