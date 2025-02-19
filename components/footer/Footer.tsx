import React from "react";
import Image from "next/image";
import logo from "@/public/logo-footer.png";
import facebook from "@/public/facebook.svg";
import Link from "next/link";
import { useLocale } from "next-intl";

const Footer = () => {
  const locale = useLocale();
  const support = [
    {
      title: "Tin tức",
      href: "/tin-tuc",
    },
    {
      title: "Liên hệ",
      href: "/lien-he",
    },
  ];
  const company = [
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
  ];
  return (
    <div className="bg-[#0b2154] pt-[100px] pb-[30px] flex items-center flex-col gap-10">
      <div className="w-full max-w-[1200px] flex gap-5 justify-between flex-wrap">
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <Image
            src={logo}
            alt="download-img"
            className="w-[100%] object-cover max-w-[170px]"
          />
          <p className="text-[#fff] text-[15px] font-light">
            Get your photos done Best Quality in the Fastest with the Lowest
            cost
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-auto">
          <p className="text-[#fff] text-[20px] font-light">Hỗ trợ</p>
          {support.map((item) => (
            <Link
              href={`${"/"}${locale}${item.href}`}
              legacyBehavior
              passHref
              key={item.title}
            >
              <a className="text-[#fff] text-[15px] font-light">{item.title}</a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full md:w-auto">
          <p className="text-[#fff] text-[20px] font-light">Công ty</p>
          {company.map((item) => (
            <Link
              href={`${"/"}${locale}${item.href}`}
              legacyBehavior
              passHref
              key={item.title}
            >
              <a className="text-[#fff] text-[15px] font-light">{item.title}</a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <p className="text-[#fff] text-[20px] font-light">Địa chỉ</p>
          <p className="text-[#fff] text-[15px] font-light">
            Địa chỉ:{" "}
            <span className="text-[#cadafe]">
              Tầng 5 Tòa nhà C&apos;LAND, 81 Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm,
              Hà Nội
            </span>
          </p>
          <a
            href={`mailto:thoant@pse.com.vn?subject=${"Hỗ trợ PSE"}`}
            className="text-[#fff] text-[15px] font-light"
          >
            Email: <span className="text-[#cadafe]">thoant@pse.com.vn</span>
          </a>
          <p className="text-[#fff] text-[15px] font-light">
            Điện thoại:{" "}
            <a href={`tel:(+84)392965545`} className="text-[#cadafe]">
              0392965545
            </a>
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1200px] flex gap-5 justify-between items-center">
        <p className="text-[#d8d8d8] text-[15px] font-medium">
          © 2017 PSE INPHOTO CO., LTD
        </p>
        <Link
          href="https://www.facebook.com/pse.com.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={facebook}
            alt="download-img"
            className="object-cover w-[40px] h-[40px] hover:transform hover:translate-y-[-3px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
