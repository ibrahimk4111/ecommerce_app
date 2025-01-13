import Image from "next/image";
import React from "react";
import product14 from "@/public/14.png";
import { popularcategories } from "@/api/categories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Categorycard = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {popularcategories.map((item, index) => (
            <CarouselItem key={index} className=" basis-40">
              <div
                className={`py-2 flex gap-3 flex-col justify-center items-center rounded-md h-full max-w-36 ${
                  item.bgcolor === "yellow"
                    ? "bg-yellow-500/20"
                    : item.bgcolor === "red"
                    ? "bg-red-500/20"
                    : item.bgcolor === "green"
                    ? "bg-green-500/20"
                    : "bg-purple-500/20"
                } `}
              >
                <div className=" h-20 w-full relative ">
                  <Image
                    src={item.image}
                    alt="image file of 14"
                    fill={true}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className=" text-sm font-bold ">{item.name}</h1>
                  <p className=" text-sm text-slate-500 ">{item.items} items</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categorycard;
