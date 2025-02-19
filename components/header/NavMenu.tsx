"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cva } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const NavMenu: React.FC = () => {
  const navs = [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Giới thiệu",
      href: "/gioi-thieu",
    },
    {
      title: "Dịch vụ",
      href: "/dich-vu",
    },
    {
      title: "Tầm nhìn",
      href: "/tam-nhin",
    },
    {
      title: "Tuyển dụng",
      href: "/tuyen-dung",
    },
    {
      title: "Tin tức",
      href: "/tin-tuc",
    },
    {
      title: "Liên hệ",
      href: "/lien-he",
    },
  ];

  const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center text-[#0b2154] text-[17px] font-400 rounded-md bg-background px-4 py-2 text-sm transition-colors hover:text-[#FF2D55] focus:text-[#FF2D55]  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  );

  const pathname = usePathname();
  const locale = useLocale();

  const isNav = (href: string) => {
    const parts = pathname.split(locale);
    const hrefCurrent = parts[1] === "" ? "/" : parts[1];
    return Boolean(hrefCurrent === href);
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navs.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={`${"/"}${locale}${item.href}`} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  isNav(item.href) ? "text-[#FF2D55]" : ""
                }`}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
