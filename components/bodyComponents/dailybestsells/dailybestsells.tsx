import React from "react";
import Bestsellscard from "./bestsellscard";
import bestsellbanner from "@/public/div.banner-img.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Dailybestsells = () => {
  return (
    <div className=" container mx-auto py-5 ">
      <div className=" flex gap-5 items-center justify-between w-full py-3 ">
        <h1 className=" text-2xl font-bold ">Daily Best Sells</h1>
        <ul className=" flex gap-5 justify-center items-center text-sm ">
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">New Added</a>
          </li>
        </ul>
      </div>
      <div className=" grid grid-cols-8 gap-5">
        <div className=" col-span-2 relative ">
          <Image
            src={bestsellbanner}
            alt="best sell banners"
            fill={true}
          />
          <div className=" absolute top-0 flex flex-col justify-center items-start h-full px-10 gap-5 ">
            <p className=" font-bold text-3xl">Bring nature into your home.</p>
            <Button size={"sm"} className=" bg-commonColor ">See More</Button>
          </div>
        </div>
        <div className=" col-span-6 ">
          <Bestsellscard />
        </div>
      </div>
    </div>
  );
};

export default Dailybestsells;
