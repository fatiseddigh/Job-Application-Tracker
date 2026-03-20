"use client";

import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ---------------- VARIANTS ---------------- */
const buttonVariants = cva(
  [
    "group/button inline-flex items-center justify-center whitespace-nowrap",
    "rounded-lg font-medium text-sm",
    "transition-all duration-200 ease-out",
    "select-none outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-3 focus-visible:ring-ring/40",
    "active:scale-[0.98]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        /* 🔥 Primary (main CTA) */
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",

        /* subtle buttons */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        /* bordered */
        outline: "border border-border bg-background hover:bg-muted/60",

        /* minimal */
        ghost: "hover:bg-muted/60 hover:text-foreground",

        /* danger (UX friendly, not aggressive) */
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 active:bg-destructive/25",

        /* text button */
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-9 px-4 gap-2",
        sm: "h-8 px-3 text-[0.85rem] gap-1.5",
        lg: "h-10 px-5 text-base gap-2",
        icon: "h-9 w-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/* ---------------- TYPES ---------------- */
type ButtonProps = React.ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

/* ---------------- COMPONENT ---------------- */
function Button({
  className,
  variant,
  size,
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size }), "relative", className)}
      {...props}
    >
      {/* 🔄 Loading Spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </span>
      )}

      {/* Content */}
      <span className={cn("flex items-center gap-2", loading && "opacity-0")}>
        {children}
      </span>
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
