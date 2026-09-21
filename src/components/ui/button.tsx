import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border font-medium uppercase tracking-[0.14em] transition-[color,background-color,border-color,transform] duration-(--motion-quick) ease-(--ease-out) active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "border-signal bg-signal text-bg hover:bg-signal-hot",
        line: "border-line bg-transparent text-paper hover:border-signal hover:text-signal",
        ghost: "border-transparent bg-transparent text-mute hover:text-paper",
      },
      size: {
        default: "h-11 px-4 text-xs",
        sm: "h-9 px-3 text-2xs",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
