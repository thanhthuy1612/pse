import Recruitment from "@/components/page/recruitment/Recruitment";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tuyển dụng",
  description: "Tuyển dụng",
};

const Page: React.FC = () => {
  return <Recruitment />;
};

export default Page;
