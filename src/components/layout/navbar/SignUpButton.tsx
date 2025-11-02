import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SignUpButton = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? "bg-black" : "bg-white";
  return (
    <div className="flex flex-col gap-5 lg:flex-row md:gap-2 lg:gap-3">
      <Link href={`https://alifaedtech.com/auth/login`}>
        <div
          className={`font-medium rounded-lg flex justify-center items-center text-orange text-base  lg:text-btn-default cursor-pointer py-[14px] px-4 md:py-2 md:px-[11.5px] lg:py-[15px] lg:px-4 ${isHomePage} border border-icons-accent
          `}
        >
          Login
        </div>
      </Link>
      <Link href={`https://alifaedtech.com/auth/sign-up`}>
        <div className="font-medium rounded-lg flex justify-center items-center border-none text-white text-base  lg:text-btn-default cursor-pointer py-[14px] px-4 md:py-2 md:px-[11.5px] lg:py-[15px] lg:px-4 bg-primary-text
        transition-all duration-200 ease-in-out 
     hover:bg-orange-2 hover:shadow-button-hover 
     active:bg-orange-2 active:shadow-none">
          Sign Up
        </div>
      </Link>
    </div>
  );
};

export default SignUpButton;
