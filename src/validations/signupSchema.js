import { z } from "zod";
import { VALIDATION_MESSAGES } from "../utils/messages";

export const signupSchema = z.object({
  name: z.string().min(1, VALIDATION_MESSAGES.name.required),
  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.email.required)
    .email(VALIDATION_MESSAGES.email.invalid),
  password: z
    .string()
    .nonempty(VALIDATION_MESSAGES.password.required)
    .min(6, VALIDATION_MESSAGES.password.minLength),
});
