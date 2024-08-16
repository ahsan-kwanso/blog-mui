import { z } from "zod";
import { VALIDATION_MESSAGES } from "../utils/messages";

export const postSchema = z.object({
  title: z
    .string()
    .min(5, VALIDATION_MESSAGES.title.required)
    .max(100, VALIDATION_MESSAGES.title.maxLength),
  content: z
    .string()
    .min(10, VALIDATION_MESSAGES.content.minLength)
    .max(500, VALIDATION_MESSAGES.content.maxLength),
});
