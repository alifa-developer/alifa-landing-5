import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const userEmail = cookieStore.get("userEmail")?.value;

  if (userEmail) {
    return NextResponse.json({ email: userEmail });
  } else {
    return NextResponse.json({ error: "No email found" });
  }
}