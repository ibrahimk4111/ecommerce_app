import Image from "next/image";
import React from "react";
import product14 from "@/public/14.png";
import { popularcategories } from "@/api/categories";

const Productcard = () => {
  return (
    <div className=" flex gap-2 flex-wrap">
      {popularcategories.map((item, index) => (
        <div
          key={index}
          className={`p-5 flex flex-col justify-between items-center rounded-md ${
            item.bgcolor === "yellow"
              ? "bg-yellow-500/20"
              : item.bgcolor === "red"
              ? "bg-red-500/20"
              : item.bgcolor === "green"
              ? "bg-green-500/20"
              : "bg-purple-500/20"
          }`}
        >
          <Image src={product14} alt="image file of 14" />
          <h1 className=" text-sm font-bold ">{item.name}</h1>
          <p className=" text-sm ">{item.items} items</p>
        </div>
      ))}
    </div>
  );
};

export default Productcard;
