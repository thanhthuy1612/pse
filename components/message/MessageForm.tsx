"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import img from "@/public/tawky.svg";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SendHorizonal } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Vui lòng nhập họ và tên",
  }),
  email: z.string().email({ message: "Định dạng email không hợp lệ." }).min(2, {
    message: "Vui lòng nhập địa chỉ email",
  }),
  message: z.string().min(1, {
    message: "Vui lòng ghi tin nhắn",
  }),
});

const MessageForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Card className="max-w-sm">
      <CardHeader className="bg-[#03a84e] rounded-tr-md rounded-tl-md">
        <CardDescription className="text-white">
          Please fill out the form below and we will get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent className=" relative h-[330px]">
        <div className="absolute left-0 z-1 bg-[#03a84e] w-full h-10"></div>
        <div className="absolute left-0 z-1 w-full">
          <Card className="p-5 mx-5 z-1 bg-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#03a84e] hover:bg-[#03a84e] w-full"
                >
                  <SendHorizonal />
                  Hoàn tất
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center mt-3">
        <Link
          href="https://www.tawk.to/?utm_source=tawk-messenger&utm_medium=link&utm_campaign=referral&utm_term=6582f23f70c9f2407f81d585"
          className="rounded-full border-0 flex gap-2 hover:bg-[#e6e6e6] px-5 py-2"
        >
          <Image
            src={img}
            alt="img"
            className="w-[100%] object-cover max-w-[15px]"
          />
          Add free
          <b>live chat</b>
          to your site
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MessageForm;
