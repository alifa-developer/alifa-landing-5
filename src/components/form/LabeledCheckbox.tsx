"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  id: string;
  label: string;
  checked?: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function LabeledCheckbox({ id, label, checked, onCheckedChange }: Readonly<Props>) {
  return (
    <div className="items-top flex space-x-2 items-center">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="font-normal text-body-default-mb md:text-body-default-tb lg:text-body-small text-grey-1 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default LabeledCheckbox;
