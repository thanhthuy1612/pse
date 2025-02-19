import Contact from "@/components/page/contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ",
};

const Page: React.FC = () => {
  return <Contact />;
};

export default Page;
