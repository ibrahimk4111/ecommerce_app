import Image from "next/image";
import React from "react";
import product14 from "@/public/14.png";
import { popularcategories } from "@/api/categories";

const Productcard = () => {
  return (
    <div className=" flex gap-2 flex-wrap">
      {popularcategories.map((item, index) => (
        <div className={`p-5 ${item.bgcolor} flex flex-col justify-between items-center rounded-md`}>
          <Image src={product14} alt="image file of 14" />
          <h1 className=" text-sm font-bold ">{item.name}</h1>
          <p className=" text-sm ">{item.items} items</p>
        </div>
      ))}
    </div>
  );
};

export default Productcard;
