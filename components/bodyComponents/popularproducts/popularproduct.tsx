import React from "react";
import Productcard from "./productcard";

const Popularproduct = () => {
  return (
    <div className=" container mx-auto ">
      <div className=" flex gap-5 items-center justify-between w-full py-3 ">
        <h1 className=" text-2xl font-bold ">Popular Product</h1>
        <ul className=" flex gap-5 justify-center items-center text-sm ">
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
      <div>
        <Productcard />
      </div>
      <div>{/* <Bannercard /> */}</div>
    </div>
  );
};

export default Popularproduct;
