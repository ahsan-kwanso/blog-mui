import { z } from "zod";
import { VALIDATION_MESSAGES } from "../utils/messages";

export const replySchema = z.object({
  reply: z
    .string()
    .trim()
    .min(1, VALIDATION_MESSAGES.reply.empty)
    .refine((value) => value.length > 0, VALIDATION_MESSAGES.reply.onlySpaces),
});
