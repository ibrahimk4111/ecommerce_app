import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Bannercard from "./bannercard";
import Categorycard from "./categorycard";

const Popularcategory = () => {
  return (
    <div className=" container mx-auto py-3 ">
      <div className=" w-full flex justify-between items-center py-5  ">
        <div className=" flex gap-5 items-center justify-center">
          <h1 className=" text-2xl font-bold ">Featured Categories</h1>
        </div>

        <p className=" text-sm hover:underline cursor-pointer">
          See More
        </p>
      </div>
      <div>
        <Categorycard />
      </div>
      <div>
        <Bannercard />
      </div>
    </div>
  );
};

export default Popularcategory;
