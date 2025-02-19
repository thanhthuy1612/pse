import React from "react";
import Image from "next/image";
import NavMenu from "@/components/header/NavMenu";
import LocaleSwitcher from "@/components/locale/LocaleSwitcher";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between p-4 fixed z-10 bg-[#fff] w-screen">
      <Image
        src={logo}
        alt="download-img"
        className="w-[100%] object-cover max-w-[170px]"
      />
      <NavMenu />
      <LocaleSwitcher />
    </div>
  );
};

export default Header;
