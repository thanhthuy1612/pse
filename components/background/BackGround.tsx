import React from "react";
import Link from "next/link";

export interface BackGroundProps {
  title: string;
  bg: string;
}
const BackGround: React.FC<BackGroundProps> = ({ title, bg }) => {
  return (
    <div className={`flex flex-col items-center pb-[120px] pt-[210px] ${bg}`}>
      <p className="text-[50px] text-[#fff] mb-[20px]">{title}</p>
      <div className="flex gap-2">
        <Link href={"/"} legacyBehavior passHref key="Trang chủ">
          <a className="text-[16px] text-[#fff]">Trang chủ</a>
        </Link>
        <p className="text-[16px] text-[#fff]">|</p>
        <p className="text-[16px] text-[#fff]">{title}</p>
      </div>
    </div>
  );
};

export default BackGround;
