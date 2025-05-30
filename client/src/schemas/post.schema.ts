import { z } from "zod";

export const postSchema = z.object({
  _id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string().transform((d) => new Date(d)),
  updatedAt: z.string().transform((d) => new Date(d)),
  imageUrl: z.string().optional(),
});

export const postsArraySchema = z.array(postSchema);

export type Post = z.infer<typeof postSchema>;
