"use client";
import { Button } from "../_components/ui/Button";
import Card from "../_components/ui/Card";
import { Input } from "../_components/ui/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { useLogin } from "@/hooks";
import {
  FaildDialogContent,
  SucessDialogContent,
} from "../_components/ui/Dialog";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

const formSchema = z.object({
  email: z.string().email().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Page() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const login = useLogin({
    onSettled: () => dialogRef.current?.showModal(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    login.mutate(data);
  };

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <Card title="Login">
        <form
          className="w-full flex items-center flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Button type="submit" loading={login.isPending}>
            Submit
          </Button>
        </form>
      </Card>
      <dialog
        ref={dialogRef}
        onCancel={() => dialogRef.current?.close()}
        className="rounded-lg"
      >
        {login.isSuccess ? (
          <SucessDialogContent
            close={() => {
              dialogRef.current?.close();
              router.push("/profile");
            }}
          />
        ) : (
          <FaildDialogContent close={() => dialogRef.current?.close()} />
        )}
      </dialog>
    </div>
  );
}
