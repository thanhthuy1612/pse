import Introduce from "@/components/page/introduce/Introduce";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Giới thiệu",
};

const Page: React.FC = () => {
  return <Introduce />;
};

export default Page;
