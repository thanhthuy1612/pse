import Vision from "@/components/page/vision/Vision";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tầm nhìn",
  description: "Tầm nhìn",
};

const Page: React.FC = () => {
  return <Vision />;
};

export default Page;
