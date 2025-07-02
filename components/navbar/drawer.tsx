
import React from 'react'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { iconOptions } from '@/api/navLinks';
import { CrossIcon } from 'lucide-react';

export const DrawerComp = () => {
  return (
    <div className='flex md:hidden justify-end items-center'>
        <Drawer direction="left">
            <DrawerTrigger>
              <HamburgerMenuIcon
                className=" text-commonColor p-2 hover:border-2 border-solid border-[#b8b8b877] rounded-md cursor-pointer h-10 w-10"
                stroke={iconOptions.stroke}
              />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <CrossIcon className=" absolute right-10 top-10 " />
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
    </div>
  )
}
