import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { productdata } from "@/api/products";
import { AiFillStar } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Bestsellscard = () => {
  return (
    <Carousel>
      <CarouselContent>
        {productdata.map((item, index) => (
          <CarouselItem key={index} className=" basis-56">
            <div className="text-sm border-2 rounded-2xl p-2 relative overflow-hidden">
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

              <div className=" h-44 w-full relative ">
                <Image
                  src={item.image}
                  alt="image file of 14"
                  fill={true}
                />
              </div>

              <div className=" space-y-1">
                <p className=" text-slate-500 md:text-xs text-sm ">
                  {item.category}
                </p>
                <h1 className=" text-base font-bold">{item.name}</h1>
                <div className=" flex gap-3 justify-start items-center">
                  <AiFillStar fill="orange" />
                  <span>({item.rating})</span>
                </div>

                <div className=" flex items-center justify-start gap-2 text-sm ">
                  <p className=" font-bold text-base text-commonColor">
                    ${item.discountedPrice}
                  </p>
                  <p className=" line-through ">${item.price}</p>
                </div>

                <p>Sold: 90/120</p>
                <Button className=" bg-commonColor hover:bg-commonColor/80 text-sm w-full ">
                  <ShoppingCart />
                  <span>Add</span>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ml-12 bg-commonColor/10 top-1/3" />
      <CarouselNext className=" mr-12 bg-commonColor/10 top-1/3" />
    </Carousel>
  );
};

export default Bestsellscard;
