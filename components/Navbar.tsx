"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import MobileNav from "./MobileNav";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";

import { MENU_ITEMS } from "@/constants/header";

const Navbar: React.FC = () => {
  return (
    <div className="absolute top-9 w-full md:top-6">
      <div className="container">
        <NavigationMenu className="flex-between w-full max-w-full">
          <Link href="/" className="focus:outline-white">
            <Image
              src="/images/logo.svg"
              priority
              width={0}
              height={0}
              className="block h-[33px] w-[61px]"
              alt="Logo"
            />
          </Link>
          <NavigationMenuList className="hidden gap-6 md:flex lg:gap-[56px]">
            {MENU_ITEMS.map((menuItem) => (
              <NavigationMenuItem key={menuItem}>
                <ScrollLink
                  href={`#${menuItem}`}
                  to={`${menuItem}`}
                  smooth={true}
                  duration={500}
                  className="underline-on-hover text-[14px] capitalize leading-[17px] tracking-widest text-white"
                >
                  {menuItem}
                </ScrollLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <MobileNav />
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
