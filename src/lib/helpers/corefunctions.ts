import { format as dateFnsFormat, compareAsc } from "date-fns";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const updateSearchParams = (
  params: string,
  param: string,
  value: string,
) => {
  const updated = new URLSearchParams(params);

  // updateSearchParams.set(param,value )
};

export const delayPromise = async (second = 1) => {
  await new Promise((resolve) => setTimeout(resolve, 15 * 1000));
};

export const dateTimeDisplayer = (date: string | number | Date) => {
  // returns 27 Jun 2024 12:28 pm

  return dateFnsFormat(date, "dd MMM y h:mm a");
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
