import { categories } from "@/api/categories";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Categories = () => {


  return (
    <div className=" py-20 px-4 ">
      <h1 className=" text-xl font-bold px-4 ">CATEGORIES</h1>
      <hr className="my-5 " />
      <div className=" flex items-center justify-between h-full">
        {/* <button className=" bg-gradient-to-r from-slate-700 to-transparent h-full lg:hidden block">back</button> */}
        <ul
          className=" flex overflow-x-auto gap-y-5 gap-1 p-2 w-full "
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {categories &&
            categories.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="group w-full min-w-[5rem]"
              >
                <li className=" flex flex-col justify-center items-center gap-2 w-full ">
                  <div className=" w-14 h-14 overflow-hidden rounded-full bg-slate-100 p-2">
                    <Image src={item.img} alt="logo" />
                  </div>
                  <p className=" group-hover:underline text-sm ">{item.name}</p>
                </li>
              </Link>
            ))}
        </ul>
        {/* <button className=" bg-gradient-to-l from-slate-700 to-transparent h-full lg:hidden block">forw</button> */}
      </div>
    </div>
  );
};

export default Categories;
