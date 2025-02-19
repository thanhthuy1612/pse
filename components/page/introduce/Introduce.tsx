import BackGround from "@/components/background/BackGround";
import IntroduceText from "@/components/page/introduce/IntroduceText";
import React from "react";

const Introduce: React.FC = () => {
  return (
    <>
      <BackGround title="Giới thiệu" bg="bg-bg" />
      <IntroduceText />
    </>
  );
};

export default Introduce;
