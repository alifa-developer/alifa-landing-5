"use client";
import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { Oval } from "react-loader-spinner";

type Variant =
  | "orange"
  | "transparent"
  | "white"
  | "bordered-white"
  | "download";
type ButtonType = "submit" | "reset" | "button" | undefined;

interface MasterButtonProps {
  loading?: boolean;
  disabled?: boolean;
  text: string;
  prefixIcon?: string;
  suffixIcon?: string;
  hoverSuffixIcon?: string;
  variant: Variant;
  size: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
  containerClass?: string;
  type?: ButtonType;
  href?: string;
  target?: "_blank" | "_self";
}

const MasterButton: React.FC<MasterButtonProps> = ({
  text,
  prefixIcon,
  suffixIcon,
  hoverSuffixIcon,
  variant,
  size,
  onClick,
  loading,
  disabled,
  containerClass,
  type = "button",
  href,
  target = "_self",
}) => {
  const { pending } = useFormStatus();
  const isDisabled = disabled || loading || pending;

  const commonClasses = classNames(
    "flex justify-center items-center font-medium text-nowrap group",
    {
      // SIZE
      "rounded-lg h-[42px] lg:h-[48px] px-3 lg:px-4 text-btn-default-mb md:text-btn-default-tb lg:text-btn-default":
        size === "md",
      "rounded-lg py-[10px] px-3 md:px-4 text-btn-small-mb md:text-btn-small-tb lg:text-btn-small":
        size === "sm",

      // BORDERED
      "border rounded-lg border-orange":
        variant === "bordered-white" || variant === "white",

      // BACKGROUND
      "bg-white": variant === "white" && !isDisabled,
      "bg-primary-text": variant === "orange" && !isDisabled,
      "border border-white": variant === "transparent",

      // TEXT SIZE
      "text-btn-small-mb md:text-btn-small-tb lg:text-btn-small": size === "sm",
      "text-btn-default-mb md:text-btn-default-tb lg:text-btn-default":
        size === "md",

      // TEXT COLOR
      "text-[#ffffff]": variant === "orange" || variant === "transparent",
      "text-orange": variant === "white",

      // DISABLED
      "bg-grey-3 text-white border-0 cursor-not-allowed": isDisabled,

      // HOVER/ACTIVE
      "transition-all duration-200 ease-in-out border-bg-orange-2 hover:bg-orange-2 hover:shadow-button-hover hover:text-white active:bg-orange-2 active:shadow-none":
        !isDisabled &&
        (variant === "orange" ||
          variant === "white" ||
          variant === "transparent"),
    },
    containerClass
  );

  const content = (
    <span className="flex items-center gap-2">
      {(pending || loading) && (
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
      )}

      {prefixIcon && (
        <Image
          src={prefixIcon}
          alt="prefix icon"
          width={20}
          height={20}
          className="w-4 lg:w-5 h-4 lg:h-5"
        />
      )}

      <span className="truncate">{text}</span>

      {suffixIcon && (
        <>
          <Image
            src={suffixIcon}
            alt="suffix icon"
            width={20}
            height={20}
            className={classNames(
              "w-4 lg:w-5 h-4 lg:h-5",
              hoverSuffixIcon ? "group-hover:hidden group-active:hidden" : ""
            )}
          />
          {hoverSuffixIcon && (
            <Image
              src={hoverSuffixIcon}
              alt="hover suffix icon"
              width={20}
              height={20}
              className="w-4 lg:w-5 h-4 lg:h-5 hidden group-hover:block group-active:block"
            />
          )}
        </>
      )}
    </span>
  );
  if (href) {
    return (
      <Link href={href} target={target} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={() => {
        if (!isDisabled && typeof onClick === "function") {
          onClick();
        }
      }}
      className={commonClasses}
    >
      {content}
    </button>
  );
};

export default MasterButton;
