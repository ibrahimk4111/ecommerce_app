import React from "react";
import Link from "next/link";
import { paths } from "@/utils/paths";
import SigninForm from "./SigninForm";

const Signin = () => {
  return (
    <div className=" bg-orange-50 min-h-screen flex justify-center items-center p-2">
      <div className=" bg-white p-5 flex flex-col gap-10 xl:w-[25vw] lg:w-[30vw] md:w-[40vw] sm:w-[50vw] w-full">
        <h1 className=" text-center text-2xl font-bold underline underline-offset-8">
          Login Here
        </h1>
        <SigninForm />
        <div className=" flex justify-center items-center gap-1">
          <p>Not a member yet?</p>
          <Link href={paths.auth.signup} className=" text-orange-400 ">
            Register now
          </Link>
        </div>

        {/* auto login icons */}
        <div>
          <p className=" w-full text-center ">OR</p>
          <div className=" flex justify-center items-center gap-5 mt-5">
            <Link href="#">Google</Link>
            <Link href="#">Facebook</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
