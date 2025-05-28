import PostCard from "@/components/posts/PostCard.component";
import { useListPosts } from "@/hooks/posts/useListPosts";

const PostsList = () => {
  const { data: posts, isLoading, error } = useListPosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center gap-y-6">
      {posts?.length ? (
        <>
          {/* Hero post */}
          <div className="w-full max-w-[1170px]">
            <PostCard post={posts[0]} large />
          </div>

          {/* Deux posts côte à côte */}
          <div className="flex flex-wrap gap-6 w-full max-w-[1170px]">
            {posts.slice(1, 3).map((post, idx) => (
              <div
                key={post.title + idx}
                className="w-full md:w-[calc(50%-12px)]"
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No posts available.</p>
      )}
    </div>
  );
};

export default PostsList;
