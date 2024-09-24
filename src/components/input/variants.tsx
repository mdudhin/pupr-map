import { cva, type VariantProps } from "class-variance-authority";

export const textInputVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        underlined:
          "bg-background text-foreground border-b-[1px] border-solid border-input font-normal disabled:cursor-not-allowed",
        file: "bg-background rounded-md text-foreground font-normal disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-ring",
      },
      fieldSize: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      fieldSize: "default",
    },
  }
);

export type TextInputVariants = VariantProps<typeof textInputVariants>;
