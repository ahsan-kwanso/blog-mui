import { z } from "zod";
import { VALIDATION_MESSAGES } from "../utils/messages";

export const loginSchema = z.object({
  email: z
    .string()
    .email(VALIDATION_MESSAGES.email.invalid)
    .nonempty(VALIDATION_MESSAGES.email.required),
  password: z.string().nonempty(VALIDATION_MESSAGES.password.required),
});
