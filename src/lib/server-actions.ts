"use server";

export const loginStuff = (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    if (!email || !password)
      return { type: "error", message: "Enter Credentials" };

    return {
      email,
      password,
    };
  } catch (error) {
    //
  }
};
