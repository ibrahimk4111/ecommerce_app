import { paths } from "@/utils/paths";
import Link from "next/link";
import React from "react";
import Topbar from "./topbar";
import { SearchIcon, ShoppingCart, UserCircle } from "lucide-react";
import { iconOptions } from "@/api/navLinks";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Categorybar from "./categorybar";

const Navbar = () => {
  return (
    <div className=" sticky top-0 bg-white ">
      <div className="w-full bg-[#F5F5F5] py-1 flex justify-center items-center">
        <Topbar />
      </div>

      <div className=" container w-full mx-auto flex justify-between items-center py-2 ">
        <Link
          href={paths.home}
          className=" text-2xl font-bold font-sans text-commonColor"
        >
          MegaMart
        </Link>

        {/* search section */}
        <div className=" flex items-center gap-1 w-full max-w-[40vw] ">
          <Input
            name="name"
            type="text"
            placeholder="Search Products..."
            className=" h-9 w-full rounded-md outline-none text-lg "
          />
          <Button variant={"outline"} size={"icon"}>
            <SearchIcon stroke={iconOptions.stroke} size={iconOptions.size} />
          </Button>
        </div>

        {/* log in and cart options  */}
        <div className=" flex items-center justify-center gap-5">
          <Link
            href={paths.auth.signin}
            className="px-1 hover:bg-slate-100 hover:underline gap-1 rounded-md flex justify-center items-center"
          >
            <UserCircle stroke={iconOptions.stroke} size={iconOptions.size} />
            <span className=" p-1 ">Login</span>
          </Link>

          <Link
            href={paths.auth.signup}
            className="px-1 hover:bg-slate-100 hover:underline gap-1 rounded-md flex justify-center items-center"
          >
            <ShoppingCart stroke={iconOptions.stroke} size={iconOptions.size} />
            <span className=" p-1 ">Cart</span>
          </Link>
        </div>
      </div>

      <div className="w-full border border-[#b8b8b877]">
        <Categorybar />
      </div>
    </div>
  );
};

export default Navbar;
