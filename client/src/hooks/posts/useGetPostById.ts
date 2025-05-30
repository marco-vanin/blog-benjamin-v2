import { api } from "@/lib/api";
import { postSchema, type Post } from "@/schemas/post.schema";
import { useQuery } from "@tanstack/react-query";

export function useGetPostById(id: string | null) {
  return useQuery<Post | undefined, Error>({
    queryKey: ["post", id],
    enabled: !!id,
    queryFn: async () => {
      if (!id) return undefined;
      const res = await api.get("/posts/" + id);
      const parsed = postSchema.safeParse(res.data);
      if (!parsed.success) throw new Error("Invalid post data from server");
      return parsed.data;
    },
  });
}
