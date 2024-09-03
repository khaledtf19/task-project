"use client";

import { ProfileType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { SVGProps, useEffect } from "react";
import { Button } from "../_components/ui/Button";
import { useRouter } from "next/navigation";
import { Spinner } from "../_components/ui/utils";
import Link from "next/link";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: profileData, isLoading } = useQuery<ProfileType>({
    queryKey: ["profile"],
  });

  useEffect(() => {
    if (!profileData?.id && !isLoading) {
      router.push("/login");
    }
  }, [profileData?.id]);

  if (isLoading || !profileData) {
    return (
      <div className="flex flex-col items-center justify-center p-4 h-full w-full">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-12 h-full">
      <div className="w-full flex gap-6 justify-end items-center ">
        <div className="h-full w-fit bg-slate-100 p-2 rounded-lg">
          <BellIcon className="h-5 w-5" />
        </div>
        <Image
          width={45}
          height={45}
          src={profileData?.image || ""}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <div className="flex gap-3 items-center w-full justify-center flex-col px-20">
        <div className="flex gap-3 items-center w-full text-sm">
          <p>Employees</p>
          <ArrowIcon className="h-4 w-4 rotate-180" />
          <p>Profile</p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex gap-6 justify-between items-center ">
            <div className="flex gap-5 items-center">
              <Image
                width={60}
                height={60}
                src={profileData?.image || ""}
                alt="avatar"
                className="rounded-md"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{`${profileData?.first_name} ${profileData?.last_name}`}</h1>
                <div className="flex items-center gap-2">
                  <BagIcon />
                  <p className="text-lg font-bold">{profileData?.bio}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon />
                  <p className="text-gray-500">{profileData?.email}</p>
                </div>
              </div>
            </div>
            <div>
              <Button>Edit Profile</Button>
            </div>
          </div>
          <div className="w-full h-1 bg-slate-100" />
          <div className="w-full flex flex-col gap-6 p-2">
            <div className="flex gap-3 text-lg border-b border-gray-200">
              <Link href="/profile" className="p-3">
                Personal Information
              </Link>
              <Link href="/profile/professional" className="p-3">
                Professional Information
              </Link>
              <Link href="/profile/documents" className="p-3">
                Documents
              </Link>
              <Link href="/profile/access" className="p-3">
                Account Access
              </Link>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z"
      ></path>
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
      ></path>
    </svg>
  );
}

export function BagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1a4 4 0 0 0-4 4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a4 4 0 0 0-4-4m-6-1h4v1h-4zm2 5l2 2l-2 2l-2-2zm6 7H9v2H8v-2H6v-1h12z"
      ></path>
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
      ></path>
    </svg>
  );
}
