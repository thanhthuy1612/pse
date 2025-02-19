"use client";

import React from "react";
import Image from "next/image";
import { z } from "zod";
import contact from "@/public/contact.png";
import { Button } from "@/components/ui/button";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { LogInIcon } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Vui lòng nhập họ và tên",
  }),
  email: z.string().email({ message: "Định dạng email không hợp lệ." }).min(2, {
    message: "Vui lòng nhập địa chỉ email",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Số điện thoại phải có ít nhất 10 chữ số.",
    })
    .max(15, {
      message: "Số điện thoại không được vượt quá 15 chữ số.",
    })
    .regex(/^\d+$/, {
      message: "Số điện thoại chỉ được chứa chữ số.",
    }),
  title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
  notification: z.string().min(1, {
    message: "Vui lòng ghi nội dung",
  }),
});

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-[#f5f7fd] flex justify-center pt-[100px] pb-[70px]">
      <div className="flex w-full max-w-[1200px] gap-5">
        <div className="flex-1">
          <Image
            src={contact}
            alt="contact"
            className="w-[500px] object-cover"
          />
        </div>
        <Card className="flex-1 shadow-md">
          <CardHeader>
            <CardTitle className="text-[30px] text-[#221668] font-medium">
              Để lại lời nhắn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex gap-5">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Họ và tên" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
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
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Số điện thoại" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Tiêu đề" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="notification"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Nội dung" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-custom-red to-custom-orange relative transition-all duration-300"
                  >
                    <LogInIcon />
                    Gửi
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
