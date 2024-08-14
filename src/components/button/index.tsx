import { BUTTON_VARIANTS } from "@/types/enums";
import { cn } from "@/utils/cn";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: BUTTON_VARIANTS;
  children: React.ReactNode;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        classNames({
          "bg-primary text-mist": variant === BUTTON_VARIANTS.PRIMARY,
          "bg-mist text-primary": variant === BUTTON_VARIANTS.SECONDARY,
          "rounded border-primary border": true,
        }),
        className
      )}
    >
      {children}
    </button>
  );
}
