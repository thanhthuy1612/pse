import Home from "@/components/page/home/Home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ",
};

const Page: React.FC = () => {
  return <Home />;
};

export default Page;
