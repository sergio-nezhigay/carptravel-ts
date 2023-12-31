import React from "react";
import { Link as ScrollLink } from "react-scroll";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

import { MENU_ITEMS, MOBILE_MENU_BUTTONS } from "@/constants/header";

export const MobileNav: React.FC = () => {
  const { menuText, closeText } = MOBILE_MENU_BUTTONS;
  return (
    <Sheet>
      <SheetTrigger
        aria-controls="mobilemenu"
        className="text-[14px] uppercase leading-[17px] tracking-widest text-white focus:outline-white md:hidden"
      >
        <span id="mobilemenu">{menuText}</span>
      </SheetTrigger>
      <SheetContent className="flex-center w-full border-none bg-[#010A05BF] px-5 py-[43px]">
        <SheetHeader>
          <SheetTrigger className="absolute right-5 top-[43px] z-50 ml-auto text-[14px] uppercase leading-[17px] tracking-widest text-white">
            {closeText}
          </SheetTrigger>
        </SheetHeader>
        <NavigationMenuList className="flex flex-col gap-12">
          {MENU_ITEMS.map((menuItem) => (
            <NavigationMenuItem key={menuItem}>
              <SheetClose asChild>
                <ScrollLink
                  href={`#${menuItem}`}
                  to={`${menuItem}`}
                  smooth={true}
                  duration={500}
                  className="underline-on-hover text-[18px] capitalize leading-[22px] tracking-widest text-white"
                >
                  {menuItem}
                </ScrollLink>
              </SheetClose>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </SheetContent>
    </Sheet>
  );
};
