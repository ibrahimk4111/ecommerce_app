import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Productcard from "./productcard";

const Popularcategory = () => {
  return (
    <div className=" container mx-auto py-5 ">
      <div className="w-full flex justify-between items-center py-5 ">
        <div className=" flex gap-5">
          <h1 className=" text-2xl font-bold ">Featured Categories</h1>
          <ul className=" flex gap-5 justify-center items-center ">
            <li>
              <a href="#">Cake & Milk</a>
            </li>
            <li>
              <a href="#">Coffee & Tea</a>
            </li>
            <li>
              <a href="#">Pet Food</a>
            </li>
            <li>
              <a href="#">Vagetables</a>
            </li>
          </ul>
        </div>

        <div className=" flex justify-between items-center gap-3">
          <IoIosArrowBack className=" p-1 w-6 h-6 bg-commonColor/20 rounded-full text-center hover:bg-commonColor/30 text-slate-500 cursor-pointer" />
          <IoIosArrowForward className=" p-1 w-6 h-6 bg-commonColor/20 rounded-full text-center hover:bg-commonColor/30 text-slate-500 cursor-pointer" />
        </div>
      </div>
      <div>
        <Productcard />
      </div>
    </div>
  );
};

export default Popularcategory;
