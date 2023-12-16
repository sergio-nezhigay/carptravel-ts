import { MENU_ITEMS } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./Header/MobileNav";

function Home() {
  return (
    <section className="pt-9">
      <div className="container w-full">
        <NavigationMenu className="flex-between w-full max-w-full ">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              priority
              width="0"
              height="0"
              className="w-[63px]"
              alt="Logo"
            />
          </Link>
          <NavigationMenuList className="hidden md:flex">
            {MENU_ITEMS.map((menuItem) => (
              <NavigationMenuItem key={menuItem}>
                <NavigationMenuLink
                  href={`/`}
                  // href={`/${menuItem}`}
                  className="underline-on-hover"
                >
                  {menuItem}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <MobileNav />
        </NavigationMenu>
      </div>
    </section>
  );
}

export default Home;
