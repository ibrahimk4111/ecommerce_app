import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { productdata } from "@/api/products";
import { AiFillStar } from "react-icons/ai";

const Productcard = () => {
  return (
    <div className=" grid grid-cols-5 gap-3 ">
      {productdata.map((item, index) => (
        <div key={index} className="text-sm border-2 rounded-2xl p-2 relative overflow-hidden">
          <span
            className={` absolute top-0 left-0 rounded-br-xl rounded-tl-xl ${
              item.label === "Hot"
                ? "bg-red-600"
                : item.label === "Sale"
                ? "bg-sky-500"
                : item.label === "New"
                ? "bg-green-600"
                : "bg-orange-400"
            } w-16 text-center py-1 text-white z-50`}
          >
            {item.label}
          </span>

          <div className=" h-60 w-full relative ">
            <Image
              src={item.image}
              alt="image file of 14"
              fill={true}
            />
          </div>

          <div className=" space-y-2">
            <p className=" text-slate-500 ">{item.category}</p>
            <h1 className=" text-base font-bold">{item.name}</h1>
            <div className=" flex gap-3 justify-start items-center">
              <AiFillStar fill="orange" />
              <span>({item.rating})</span>
            </div>
            <p>
              By: <span className=" text-commonColor ">{item.by}</span>
            </p>
            <div className=" flex justify-between items-center ">
              <div className=" flex items-center justify-center gap-2 text-sm ">
                <p className=" font-bold text-base ">${item.discountedPrice}</p>
                <p className=" line-through ">${item.price}</p>
              </div>
              <Button className=" bg-commonColor hover:bg-commonColor/80 ">
                <ShoppingCart />
                <span>Add</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productcard;
