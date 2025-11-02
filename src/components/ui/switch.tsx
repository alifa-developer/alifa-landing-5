"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/utils/CssUtils";
import { Check } from "lucide-react";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [showCheck, setShowCheck] = React.useState(props.defaultChecked ?? false);
  const { onCheckedChange } = props;

  props.onCheckedChange = (c: boolean) => {
    if (onCheckedChange) onCheckedChange(c);
    setShowCheck((current) => !current);
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border-1.5 data-[state=checked]:border-none data-[state=unchecked]:border-customGray transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-text data-[state=unchecked]:bg-transparent",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-3 w-3 rounded-full data-[state=checked]:bg-white data-[state=unchecked]:bg-customGray shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5"
        )}
      >
        {showCheck && (
          <Check className="h-2 w-2 text-primary-text relative top-[0.15rem] left-[0.15rem]" strokeWidth={6} />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
