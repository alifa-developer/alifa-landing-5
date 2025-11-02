"use client";
import { useState, useMemo } from "react";
import { Select as NextSelect, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import classNames from "classnames";
import "./select.css";
import Link from "next/link";

interface Props<T> {
  placeholder?: string;
  label?: string;
  required?: boolean;
  onChange?: (value: T) => void;
  baseClassName?: string;
  containerClassName?: string;
  options: { name: string; id: string }[];
  value: T;
  selectionMode?: "single" | "multiple";
  linkHref?: string;
  linkText?: string;
}

const Select = <T extends string | string[]>({
  placeholder,
  label,
  required = false,
  onChange,
  baseClassName,
  containerClassName = "w-full",
  options,
  value,
  selectionMode = "single",
  linkHref,
  linkText,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedKeys = useMemo(() => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return new Set([]);
    }
    return new Set(Array.isArray(value) ? value : [value as string]);
  }, [value]);

  const isEmpty = selectedKeys.size === 0;
  const hasNoOptions = options.length === 0;

  return (
    <div className={`${containerClassName}`}>
      {label && (
        <label className="relative mb-2 inline-block text-grey-1 text-body-small-mb md:text-body-default-tb lg:text-body-default font-normal">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <NextSelect
        aria-label={label || "Select dropdown"}
        onOpenChange={setIsOpen}
        selectedKeys={selectedKeys}
        placeholder={placeholder}
        selectionMode={selectionMode}
        data-empty={isEmpty}
        classNames={{
          base: `w-full font-normal text-body-field-mb md:text-body-field-tb lg:text-body-field border border-[#E6E6E6] bg-none rounded-lg ${baseClassName}`,

          trigger: `
            bg-white shadow-none p-[10px] lg:pr-8 w-full h-[48px] custom-next-select
          `,
          listbox: "text-grey-1 max-h-[244px] overflow-auto",
          selectorIcon: classNames(
            "right-2 w-[20px] h-[20px] transform transition-transform duration-300 ease-in-out",
            { "rotate-180": isOpen }
          ),
          innerWrapper: "max-w-full",
          value: classNames(
            "text-body-field-mb md:text-body-field-tb lg:text-body-field font-normal",
            isEmpty ? "text-grey-2" : "text-grey-1"
          ),
          label: isEmpty ? "text-grey-2" : "text-grey-1 text-body-field-mb md:text-body-field-tb lg:text-body-field border",
        }}
        onSelectionChange={(keys) => {
          if (typeof onChange === "function" && !hasNoOptions) {
            const keysArray = Array.from(keys);
            if (selectionMode === "single") {
              onChange(keysArray[0] as T);
            } else {
              onChange(keysArray as unknown as T);
            }
          }
        }}
        selectorIcon={
          <div className="bg-white">
            <Image
              src="/profile-complete/down.svg"
              height={20}
              width={20}
              alt="Dropdown Icon"
            />
          </div>
        }
        popoverProps={{
          classNames: {
            content: "nextui-select-popover",
          },
        }}
      >
        {hasNoOptions && linkHref ? (
          <SelectItem key="add-child-link">
            <Link
              href={linkHref}
              className="text-orange text-body-field-mb md:text-body-field-tb lg:text-body-field font-medium w-full block py-1"
            >
              {linkText}
            </Link>
          </SelectItem>
        ) : (
          options.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))
        )}
      </NextSelect>
    </div>
  );
};

export default Select;
