import { z } from "zod";
import { VALIDATION_MESSAGES } from "../utils/messages";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty(VALIDATION_MESSAGES.email.required)
    .email(VALIDATION_MESSAGES.email.invalid),
  password: z.string().nonempty(VALIDATION_MESSAGES.password.required),
});
