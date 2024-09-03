import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function Post(request: Request) {
  const { set } = cookies();

  return NextResponse.json({});
}
