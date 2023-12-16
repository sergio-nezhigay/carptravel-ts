import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MENU_ITEMS } from "@/constants";
import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="text-[14px] leading-[17px] tracking-widest text-white">
        MENU
      </SheetTrigger>
      <SheetContent className="flex-center w-full border-none bg-[#010A05BF] px-5 py-[43px]">
        <SheetHeader>
          <SheetTrigger className="absolute right-5 top-[43px] z-50 ml-auto text-[14px] leading-[17px] tracking-widest text-white">
            CLOSE
          </SheetTrigger>
        </SheetHeader>
        <NavigationMenuList className="flex flex-col gap-12">
          {MENU_ITEMS.map((menuItem) => (
            <NavigationMenuItem key={menuItem}>
              <NavigationMenuLink
                href={`/${menuItem}`}
                className="underline-on-hover text-[18px] capitalize leading-[22px] tracking-widest text-white"
              >
                {menuItem}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
