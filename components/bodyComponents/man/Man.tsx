import React from "react";
import ManCards from "./ManCards";

const Man = () => {

  return (
    <>
      <div className=" container mx-auto py-20 ">
        <h1 className=" text-xl font-bold px-4 ">Man's Wares</h1>
        <hr className="my-5 " />
        <ManCards />
      </div>
    </>
  );
};

export default Man;
