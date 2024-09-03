"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "./ui/utils";
import { useProfile } from "@/hooks";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: profileData, error, isRefetching, isLoading } = useProfile();
  useEffect(() => {
    console.log(profileData, error);
  }, [profileData, error]);

  return (
    <div className="fixed left-0 top-8 m-auto z-10 flex flex-col bg-white">
      {isOpen ? (
        <OpenedSidebar
          close={() => setIsOpen(false)}
          status={isRefetching || isLoading || error !== null}
        />
      ) : (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "bg-white border-y rounded-r-full border-r border-slate-200 p-3 w-16 flex justify-end transition-colors hover:bg-slate-100",
            { hidden: isOpen },
          )}
        >
          <ArrowIcon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}

function OpenedSidebar({
  close,
  status,
}: {
  close: () => void;
  status?: boolean;
}) {
  return (
    <div
      className={`fixed left-3 my-auto drop-shadow-md z-10 flex flex-col border border-slate-200 rounded-xl bg-white w-fit h-[80vh] overflow-auto`}
    >
      <nav className="flex-1 overflow-auto py-4 flex flex-col gap-4">
        <div
          className="flex items-center justify-center  gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-500 rotate-180"
          onClick={close}
        >
          <ArrowIcon className="h-6 w-6" />
        </div>
        <div className="grid gap-6 px-6">
          <div>
            <h3 className=" text-sm font-medium text-gray-500 text-center">
              Main
            </h3>
            <div className="grid gap-1">
              <Link
                href="/"
                className="flex items-center justify-center  gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-500"
              >
                <HomeIcon className="h-4 w-4" />
                <span> Home </span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className=" text-sm font-medium text-gray-500 text-center">
              Account
            </h3>
            <div className="grid gap-1">
              {status ? <LoggedOutUser /> : <LoggedInUser />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function LoggedInUser() {
  const router = useRouter();
  const query = useQueryClient();
  return (
    <>
      <Link
        href="/profile"
        className="flex items-center justify-center  gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-500"
      >
        <UserIcon className="h-4 w-4" />
        <span> Profile </span>
      </Link>
      <div
        className="flex items-center justify-center  gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-500"
        onClick={async () => {
          localStorage.removeItem("token");
          query.invalidateQueries({ queryKey: ["profile"] });
          router.push("/login");
        }}
      >
        <LogOutIcon className="h-4 w-4" />
        <span> LogOut </span>
      </div>
    </>
  );
}

function LoggedOutUser() {
  return (
    <Link
      href="/login"
      className="flex items-center justify-center  gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-500"
    >
      <LogInIcon className="h-4 w-4" />
      <span> LogIn </span>
    </Link>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LogOutIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LogInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
