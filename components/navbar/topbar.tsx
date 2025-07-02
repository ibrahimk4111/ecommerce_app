import { iconOptions, topbarNavLinks } from "@/api/navLinks";
import { Settings, TruckIcon } from "lucide-react";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const Topbar: React.FC = () => {
  return (
    <div className=" container mx-auto  ">
      <div className=" flex justify-between ">
        <div>Welcome to worldwide Megamart!</div>
        <div className=" flex justify-between items-center gap-5 ">
        {topbarNavLinks.map((item, index)=>(
            <div key={index} className=" flex justify-center items-center gap-1 ">
              <item.icon stroke={iconOptions.stroke} size={iconOptions.size}/>
              <p className=" text-sm text-slate-500 hover:text-black cursor-pointer ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
