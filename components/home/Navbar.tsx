"use client";

import React from "react";
import { MENU_ITEMS } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <NavigationMenu className="flex-between w-full max-w-full  ">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          priority
          width={0}
          height={0}
          className="block h-[33px] w-[61px]"
          alt="Logo"
        />
      </Link>
      <NavigationMenuList className="hidden gap-6 md:flex lg:gap-[56px] ">
        {MENU_ITEMS.map((menuItem) => (
          <NavigationMenuItem key={menuItem}>
            {/* <NavigationMenuLink asChild> */}
            <ScrollLink
              href={`#${menuItem}`}
              to={`${menuItem}`}
              smooth={true}
              duration={500}
              // scroll={false}
              className="underline-on-hover text-[14px] capitalize leading-[17px] tracking-widest text-white"
            >
              {menuItem}
            </ScrollLink>
            {/* </NavigationMenuLink> */}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <MobileNav />
    </NavigationMenu>
  );
}

export default Navbar;
