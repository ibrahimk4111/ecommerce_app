import React from "react";
import Productcard from "./productcard";

const Popularproduct = () => {
  return (
    <div className=" container mx-auto ">
      <div className=" flex gap-5 items-center justify-between w-full py-3 ">
        <h1 className=" text-2xl font-bold ">Popular Product</h1>
      </div>
      <div>
        <Productcard />
      </div>
      <div>{/* <Bannercard /> */}</div>
    </div>
  );
};

export default Popularproduct;
