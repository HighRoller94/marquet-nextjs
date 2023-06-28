import Link from "next/link";
import SignInButton from "@/components/SignInButton";
import LoginStyles from "../../../styles/components/Login.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  return (
    <>
      <div className={LoginStyles.container}>
        <SignInButton />
      </div>
      <Link href="/account/register">
        <p className={LoginStyles.createAcc}>Don't have an account?</p>
      </Link>
    </>
  );
};

export default Login;
