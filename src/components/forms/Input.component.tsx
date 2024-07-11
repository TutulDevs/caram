"use client";
import { cn } from "@/src/lib/helpers/corefunctions";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { RxEyeNone, RxEyeOpen } from "react-icons/rx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: "text" | "password" | "email" | "number";
  note?: string;
  register: object;
  classNameWrapper?: string;
  classNameLabel?: string;
  classNameNote?: string;
  classNameError?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  note,
  register,
  className,
  classNameWrapper,
  classNameLabel,
  classNameNote,
  classNameError,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const err = (errors[name]?.message ?? "") as string;

  return (
    <div className={cn("mb-4", classNameWrapper)}>
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "block text-base font-medium text-dark",
            classNameLabel,
          )}
        >
          {label}

          {props?.required ? <sup className={"text-danger"}>*</sup> : null}
        </label>
      )}
      <div className="relative mt-1">
        <input
          {...props}
          {...register}
          id={name}
          type={showPassword ? "text" : type}
          className={cn(
            "block w-full px-3 py-2 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm",
            {
              ["input-accent"]: err,
              ["pr-10"]: type === "password",
            },
            className,
          )}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-1 right-1 px-1 rounded-md flex items-center justify-center text-sm "
          >
            {showPassword ? (
              <RxEyeNone className="text-dark/50" aria-label="hide password" />
            ) : (
              <RxEyeOpen className="text-dark/50" aria-label="show password" />
            )}
          </button>
        )}
      </div>

      {note && (
        <p className={cn("mt-1 text-xs text-dark", classNameNote)}>{note}</p>
      )}
      {err && (
        <p className={cn("mt-1 text-xs text-accent", classNameError)}>{err}</p>
      )}
    </div>
  );
};
