import { paths } from "@/utils/paths";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" md:sticky top-0 bg-slate-100 flex justify-between items-center gap-5 px-10 py-2 ">
      <Link href={paths.home} className=" text-2xl font-bold font-sans hover:text-orange-400 text-orange-500">VAN</Link>
      <div className=" w-full max-w-[40vw]">
        <input
          name="name"
          type="text"
          placeholder="Search Products..."
          className="w-full border bg-white dark:bg-[#0b3631] dark:placeholder:text-slate-400 px-5 py-2 rounded-md focus:ring-1 outline-none"
        />
      </div>
      <div className=" flex items-center">
        <Link href={paths.auth.signin} className=" hover:bg-white hover:underline px-5 py-2 rounded-md">Login</Link>
        <Link href={paths.auth.signup} className=" hover:bg-white hover:underline px-5 py-2 rounded-md">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;
