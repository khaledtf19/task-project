"use client";

import { useProfile } from "@/hooks";
import Profile from "../_components/Profile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "../_components/ui/utils";
import { useQuery } from "@tanstack/react-query";
import { ProfileType } from "@/types";

export default function Page() {
  const { data: profileData, isLoading } = useQuery<ProfileType>({
    queryKey: ["profile"],
  });

  if (!profileData) {
    return (
      <div className="flex flex-col items-center justify-center p-4 w-full">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <Profile profileData={profileData} />
    </div>
  );
}
