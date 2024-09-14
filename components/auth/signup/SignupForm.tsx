"use client";

import React from "react";

const SignupForm = () => {
  const inputClassName ="w-full border bg-slate-100 dark:bg-[#0b3631] dark:placeholder:text-slate-400 px-5 py-2 rounded-sm focus:ring-1 ring-slate-300 outline-none";

  const signupFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={signupFormSubmit}
      action="submit"
      className=" flex flex-col gap-5"
    >
      <div className=" flex flex-col justify-center items-center gap-4">
        <input
          name="name"
          type="text"
          placeholder="Username"
          className={inputClassName}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          className={inputClassName}
        />
        <input
          name="name"
          type="password"
          placeholder="Password"
          className={inputClassName}
        />
        <input
          name="name"
          type="password"
          placeholder="Confirm Password"
          className={inputClassName}
        />
      </div>
      <button
        type="submit"
        className="font-bold text-center bg-orange-400 hover:bg-orange-500 p-2 w-full text-white transition-all duration-300 ease-in-out"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default SignupForm;
