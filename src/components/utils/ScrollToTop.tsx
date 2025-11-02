"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, searchParams]);

  return null;
}

export default ScrollToTop;
