import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { productdata } from "@/api/products";
import { AiFillStar } from "react-icons/ai";

const Productcard = () => {
  return (
    <div className=" grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 ">
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
            } md:w-16 w-10 text-center py-1 text-white z-10`}
          >
            {item.label}
          </span>

          <div className=" md:h-60 h-40 w-full relative overflow-hidden ">
            <Image
              src={item.image}
              alt="image file of 14"
              fill={true}
              className=" object-cover transition-transform duration-300 hover:scale-110 "
            />
          </div>

          <div className=" space-y-2">
            <p className=" text-slate-500 ">{item.category}</p>
            <h1 className=" text-base">{item.name}</h1>
            <div className=" flex gap-3 justify-start items-center">
              <AiFillStar fill="orange" />
              <span>({item.rating})</span>
            </div>
            <p>
              By: <span className=" text-commonColor ">{item.by}</span>
            </p>
            <div className=" md:flex flex-column justify-between md:items-center items-start gap-5 ">
              <div className=" flex items-center gap-2 text-sm ">
                <p className=" font-bold text-base ">${item.discountedPrice}</p>
                <p className=" line-through ">${item.price}</p>
              </div>
              <Button className=" bg-commonColor hover:bg-commonColor/80 w-full md:mt-0 mt-2 ">
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
