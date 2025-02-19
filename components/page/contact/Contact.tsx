import BackGround from "@/components/background/BackGround";
import ContactForm from "@/components/page/contact/ContactForm";
import ContactText from "@/components/page/contact/ContactText";
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <BackGround title="Liên hệ" bg="bg-bg1 bg-cover bg-custom" />
      <ContactText />
      <ContactForm />
    </>
  );
};

export default Contact;
