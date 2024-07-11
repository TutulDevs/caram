"use client";

import { cn } from "@/src/lib/helpers/corefunctions";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  register: object;
  classNameWrapper?: string;
  classNameLabel?: string;
}

export const Radio: React.FC<RadioProps> = ({
  name,
  label,
  register,
  className,
  classNameWrapper,
  classNameLabel,
  ...props
}) => {
  return (
    <div className={cn("mb-4 flex items-center gap-2", classNameWrapper)}>
      <input
        {...props}
        {...register}
        id={String(props?.value ?? "")}
        type={"radio"}
        className={cn("radio", className)}
      />

      {label && (
        <label
          htmlFor={String(props?.value ?? "")}
          className={cn(
            "text-base font-medium text-dark flex-1 cursor-pointer",
            classNameLabel,
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
