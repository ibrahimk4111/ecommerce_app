import { manProducts } from "@/api/manProducts";
import Image from "next/image";
import React from "react";

const ManCards = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
      {manProducts &&
        manProducts.map((item, index) => (
          <div className="" key={index}>
            <div className=" h-48 rounded-md overflow-hidden flex justify-center items-center ">
              <Image
                src={item.img}
                alt="Man wares"
                className=" h-auto w-full"
              />
            </div>

            <div>
              <div className=" hover:shadow-xl shadow-black space-y-3 bg-white m-4 p-4 rounded-md">
                <h4 className=" text-green-700 font-semibold">{item.title}</h4>
                <p className=" line-clamp-6 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ManCards;
