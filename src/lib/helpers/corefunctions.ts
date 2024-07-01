import { format as dateFnsFormat, compareAsc } from "date-fns";

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
