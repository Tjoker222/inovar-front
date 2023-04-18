import classNames from "classnames";
import {
  forwardRef,
  InputHTMLAttributes,
  cloneElement,
  ReactNode,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  error?: string;
  full?: boolean;
  colorVariant?: "primary" | "secondary";
  icon?: ReactNode;
  iconDirection?: "left" | "right";
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = "",
      icon,
      error = false,
      full = false,
      type,
      disabled,
      colorVariant,
      iconDirection,
      ...props
    },
    ref
  ) => {
    const inputClasses = classNames(
      `sm:py-[1.5rem]
      py-[2rem]
      w-full 
      flex
      items-center
      gap-sm 
      border-[0.1rem]
      border-gray-600
      transition-all 
      duration-300
      px-xl 
      rounded-[1.6rem]
      sm:px-base 
      peer`,
      {
        "text-red-300 ring-red-300 ring-1": !disabled && error,
        "opacity-[0.4] cursor-not-allowed": disabled,
        "bg-white": colorVariant === "primary",
        "bg-gray-400": colorVariant === "secondary",
      }
    );

    return (
      <div
        className={`${
          full ? "w-full" : "w-fit"
        } flex flex-col gap-xs justify-start items-start`}
      >
        <div className={inputClasses}>
          {icon && iconDirection === "left" && cloneElement(icon as any)}
          <input
            ref={ref}
            disabled={disabled}
            className={`
            focus: outline-none
            text-gray-200
            text-style-medium-base
            font-inter
            w-full h-full
            bg-transparent
            placeholder:text-gray-200
            placeholder:font-inter
            placeholder:text-style-medium-base
            `}
            {...props}
          />
          {icon && iconDirection === "right" && cloneElement(icon as any)}
        </div>
        {error && (
          <small className="text-style-medium-xl font-inter text-red-300">
            {error}
          </small>
        )}
      </div>
    );
  }
);
