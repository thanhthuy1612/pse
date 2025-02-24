"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import message from "@/public/message.svg";
import close from "@/public/close.svg";
import MessageForm from "@/components/message/MessageForm";

const Message: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    console.log(2);
  }, [open]);
  return (
    <div>
      <div className="fixed z-1 bottom-[100px] right-4">
        {open && <MessageForm />}
      </div>
      <div className="fixed z-1 bottom-4 right-4">
        <Button
          onClick={() => setOpen((pre) => !pre)}
          className="bg-[#03a84e] hover:bg-[#03a84e] rounded-full w-[60px] h-[60px] "
        >
          <Image
            src={!open ? message : close}
            alt="download-img"
            className="w-[100%] object-cover max-w-[170px]"
          />
        </Button>
      </div>
    </div>
  );
};

export default Message;
