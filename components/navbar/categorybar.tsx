import { categoryLinks, iconOptions } from "@/api/navLinks";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../ui/button";
import { BsGrid } from "react-icons/bs";
import { HeadphonesIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Categorybar = () => {
  return (
    <div className=" container mx-auto flex items-center justify-between w-full py-3 ">
      <div>
        <Button
          variant="outline"
          size={"default"}
          className=" bg-commonColor text-white font-bold"
        >
          <BsGrid stroke={iconOptions.stroke} size={iconOptions.size} />
          <span>Browse All Categories</span>
          <IoIosArrowDown stroke={iconOptions.stroke} size={iconOptions.size} />
        </Button>
      </div>

      {categoryLinks.map((item, index) => (
        <DropdownMenu key={index} modal={false}>
          <DropdownMenuTrigger asChild>
            <Link
              key={index}
              href="#"
              className=" gap-1 flex justify-center items-center"
            >
              <span className=" p-1 ">{item.text}</span>
              {item.subMenu && (
                <IoIosArrowDown
                  stroke={iconOptions.stroke}
                  size={iconOptions.size}
                />
              )}
            </Link>
          </DropdownMenuTrigger>
          {item.subMenu && (
            <DropdownMenuContent className="w-56">
              {item.subMenu?.map((subItem, index) => (
                <DropdownMenuItem key={index}>{subItem.subText}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      ))}

      <div className=" flex items-center justify-center gap-2 ">
        <HeadphonesIcon stroke={iconOptions.stroke} size={30} />
        <div>
          <p className=" text-[#008ECC] ">1900-888</p>
          <p className=" text-sm w-40 ">24/7 Support Center</p>
        </div>
      </div>
    </div>
  );
};

export default Categorybar;
