import { z } from "zod";

export const createBoardSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(32),
    isPublic: z.boolean(),
  }),
});
