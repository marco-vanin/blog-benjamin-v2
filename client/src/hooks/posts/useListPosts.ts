import { api } from "@/lib/api";
import { postsArraySchema, type Post } from "@/schemas/post.schema";
import { useQuery } from "@tanstack/react-query";

export function useListPosts() {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await api.get("/posts");
      const parsed = postsArraySchema.safeParse(res.data);
      if (!parsed.success) throw new Error("Invalid post data from server");
      return parsed.data;
    },
  });
}
