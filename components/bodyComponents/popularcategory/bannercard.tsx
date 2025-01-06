import { Button } from "@/components/ui/button";
import React from "react";
import banner1 from "@/public/banner-1.jpg";
import Image from "next/image";
import { bannerdatas } from "@/api/categories";

const Bannercard = () => {
  return (
    <div className=" grid grid-cols-3 py-5 gap-5">
      {bannerdatas.map((item, index) => (
        <div className=" relative ">
          <div className=" min-h-60 w-full relative ">
            <Image
              src={item.image}
              alt="image file of 14"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className=" absolute top-0 h-full max-w-60 flex justify-center items-center ">
            <div className=" space-y-5 p-5">
              <p className=" font-bold tracking-wider text-lg ">
                Everyday fresh & clean with our product.
              </p>
              <Button
                size={"sm"}
                className=" bg-commonColor hover:bg-commonColor/70 "
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bannercard;
