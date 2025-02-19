import React from "react";
import Image from "next/image";
import address from "@/public/address.png";
import phone from "@/public/phone.png";
import email from "@/public/email.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactText: React.FC = () => {
  const contact = [
    {
      title: "Địa chỉ",
      description:
        "Tầng 5 toà C'LAND, 81 Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
      img: address,
    },
    {
      title: "Email",
      description: "thoant@pse.com.vn",
      img: email,
      href: `mailto:thoant@pse.com.vn?subject=${"Hỗ trợ PSE"}`,
    },
    {
      title: "Điện thoại",
      description: "0392965545",
      img: phone,
      href: `tel:(+84)392965545`,
    },
  ];
  return (
    <div className="flex justify-center my-[100px]">
      <div className="flex gap-10 justify-between w-full max-w-[1200px]">
        {contact.map((item) => (
          <Card key={item.title} className="flex-1  shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <Image
                src={item.img}
                alt={item.title}
                className="w-[64px] h-[64px] object-cover mb-[25px]"
              />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {item?.href ? (
                <p className="text-center text-[#6f6f6f]">{item.description}</p>
              ) : (
                <a
                  href={`mailto:thoant@pse.com.vn?subject=${"Hỗ trợ PSE"}`}
                  className="text-center text-[#6f6f6f]"
                >
                  {item.description}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactText;
