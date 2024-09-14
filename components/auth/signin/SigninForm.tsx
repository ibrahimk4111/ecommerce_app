"use client";

import Link from "next/link";
import React from "react";

const SigninForm = () => {
  const inputClassName = "w-full border bg-slate-100 dark:bg-[#0b3631] dark:placeholder:text-slate-400 px-5 py-2 rounded-sm focus:ring-1 ring-slate-300 outline-none";

  const signinFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <form
      onSubmit={signinFormSubmit}
      action=""
      className=" flex flex-col gap-5"
    >
      <div className=" flex flex-col justify-center items-center gap-4">
        <input
          name="name"
          type="text"
          placeholder="Username or email"
          className={inputClassName}
        />
        <input
          name="name"
          type="password"
          placeholder="Password"
          className={inputClassName}
        />
      </div>
      <div className=" flex justify-between items-center gap-5 text-sm  ">
        <div className=" flex justify-center items-center gap-1">
          <input type="checkbox" name="Remember me" id="" />
          <span>Remember me</span>
        </div>
        <Link href="#" className=" hover:underline ">
          Lost your password?
        </Link>
      </div>
      <button
        type="submit"
        className="font-bold text-center bg-orange-400 hover:bg-orange-500 p-2 w-full text-white transition-all duration-300 ease-in-out"
      >
        LOGIN
      </button>
    </form>
  );
};

export default SigninForm;
