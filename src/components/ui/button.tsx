import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-[hsl(45,70%,50%)] via-[hsl(45,70%,60%)] to-[hsl(45,70%,50%)] text-[hsl(0,0%,5%)] font-semibold tracking-wide hover:shadow-[0_4px_30px_hsla(45,70%,50%,0.3)] hover:-translate-y-0.5 transform",
        goldOutline: "border-2 border-[hsl(45,70%,50%)] text-[hsl(45,70%,50%)] hover:bg-[hsl(45,70%,50%)] hover:text-[hsl(0,0%,5%)] font-semibold tracking-wide",
        royal: "bg-gradient-to-r from-[hsl(220,60%,25%)] to-[hsl(220,60%,35%)] text-[hsl(45,30%,95%)] font-semibold tracking-wide hover:shadow-[0_20px_60px_hsla(0,0%,0%,0.5)] hover:-translate-y-0.5 transform",
        glass: "bg-[hsl(45,30%,95%)]/10 backdrop-blur-md border border-[hsl(45,30%,95%)]/20 text-[hsl(45,30%,95%)] hover:bg-[hsl(45,30%,95%)]/20 font-medium",
        whatsapp: "bg-[hsl(142,70%,45%)] text-[hsl(0,0%,5%)] font-semibold hover:bg-[hsl(142,70%,40%)] hover:shadow-lg hover:-translate-y-0.5 transform",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
