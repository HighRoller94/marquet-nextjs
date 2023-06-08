import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import LoginStyles from "../../../styles/components/Login.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import LayoutStyles from "../../../styles/layout/Layout.module.scss";

const Login = () => {
  return (
    <>
      <div className={LayoutStyles.page}>
        <div className={LoginStyles.container}>
          <SignInButton />
        </div>
        <Link href="/account/register">
          <p className={LoginStyles.createAcc}>Don't have an account?</p>
        </Link>
      </div>
    </>
  );
};

export default Login;
