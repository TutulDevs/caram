import { z } from "zod";

export const loginStuffSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number"),
});

export type loginStuffFormState = z.infer<typeof loginStuffSchema>;
