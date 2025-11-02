import { cn } from "@/utils/CssUtils";
import React from "react";
import { useFormStatus } from "react-dom";
import { Oval } from "react-loader-spinner";

interface Props {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const FormSecondaryButton = ({
  title,
  disabled,
  className,
  onClick,
}: Props) => {
  let cls = cn(
    `w-full bg-white font-medium text-btn-default-mb md:text-btn-default-tb lg:text-btn-default py-[16.5px] px-[16px] md:py-[13.5px] md:px-[9.5px] lg:py-[14px] lg:px-4 rounded-lg md:rounded lg:rounded-lg border border-orange text-nowrap text-center text-orange`,
    className
  );

  const { pending } = useFormStatus();

  const combinedClassName = `${cls} ${
    disabled || pending ? "bg-button-tertiary cursor-not-allowed " : ""
  }`;

  return (
    <button
      type="submit"
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {pending || disabled ? (
        <div className="flex justify-center items-center">
          <Oval
            height={16}
            width={16}
            color="orange"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="orange"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        title
      )}
    </button>
  );
};

export default FormSecondaryButton;
