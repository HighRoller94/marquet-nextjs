import React from "react";
import SignInButton from "@/components/Account/Auth/SignInButton";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-medium my-2">Welcome Back!</h1>
      <div className="my-2">
        <SignInButton />
      </div>
    </div>
  );
}

export default Login;
