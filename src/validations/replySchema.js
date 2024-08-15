import { z } from "zod";

export const replySchema = z.object({
  reply: z
    .string()
    .trim() // Remove leading and trailing spaces
    .min(1, "Reply cannot be empty")
    .refine((value) => value.length > 0, "Reply cannot be only spaces"), // Check for spaces
});
