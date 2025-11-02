"use client";
import { cn } from "@/utils/CssUtils";
import React from "react";
import { useFormStatus } from "react-dom";
import { Oval } from "react-loader-spinner";

interface Props {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}

const FormPrimaryButton = ({ title, disabled, onClick, className, loading }: Props) => {
  const { pending } = useFormStatus();

  const cls = cn(
    `font-medium w-full text-btn-default-mb md:text-btn-default-tb lg:text-btn-default py-[16.5px] px-[16px] md:py-[13.5px] md:px-[9.5px] lg:py-[14px] lg:px-4 rounded-lg md:rounded lg:rounded-lg whitespace-nowrap text-white`,
    className
  );

  const combinedClassName = `${cls} ${
    disabled || pending || loading ? "bg-button-tertiary text-white cursor-not-allowed flex justify-center items-center" : "bg-orange"
  }`;

  return (
    <button
      type="submit"
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {pending || loading ? (
        <Oval
          height={20}
          width={20}
          color="white"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="white"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        title
      )}
    </button>
  );
};

export default FormPrimaryButton;
