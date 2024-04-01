"use server";

import { loginStuffFormState, loginStuffSchema } from "./form_schemas";

export const loginStuffAction = async (
  prevState: loginStuffFormState,
  data: FormData,
) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const formData = Object.fromEntries(data);
    const parsed = loginStuffSchema.safeParse(formData);

    if (!parsed.success) {
      const fields: Record<string, string> = {};
      for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString();
      }
      return {
        message: "Invalid form data",
        fields,
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }

    if (parsed.data.email.includes("a")) {
      return {
        message: "Invalid email",
        fields: parsed.data,
      };
    }

    return { message: "User registered" };
  } catch (error) {
    //
  }
};
