import { z } from "zod";
import { VALIDATION_MESSAGES } from "../utils/messages";

export const signupSchema = z.object({
  name: z.string().min(1, VALIDATION_MESSAGES.name.required),
  email: z
    .string()
    .email(VALIDATION_MESSAGES.email.invalid)
    .min(1, VALIDATION_MESSAGES.email.required),
  password: z
    .string()
    .min(6, VALIDATION_MESSAGES.password.minLength)
    .nonempty(VALIDATION_MESSAGES.password.required),
});
