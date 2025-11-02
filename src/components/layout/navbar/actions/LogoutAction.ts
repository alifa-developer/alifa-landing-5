"use server";

import { RedirectType, redirect } from "next/navigation";
import AuthManager from "@/services/AuthManager";
import { DefaultActionResult } from "@/types/Form";
import { cookies } from "next/headers";

export default async function logout(
  _: DefaultActionResult,
  formData: FormData
) {
  await AuthManager.logout();
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();

  allCookies.forEach((cookie) => {
    cookieStore.set(cookie.name, "", {
      path: "/",
      expires: new Date(0),
    });
  });

  return redirect("/", RedirectType.replace);
}
