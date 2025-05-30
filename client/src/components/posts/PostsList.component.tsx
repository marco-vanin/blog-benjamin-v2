import PostCard from "@/components/posts/PostCard.component";
import { useListPosts } from "@/hooks/posts/useListPosts";

const PostsList = () => {
  const { data: posts, isLoading, error } = useListPosts();

  if (isLoading) return <p className="mt-8 text-center">Chargement…</p>;
  if (error)
    return (
      <p className="mt-8 text-center text-red-600">Erreur : {error.message}</p>
    );

  if (!posts?.length) {
    return (
      <section className="mt-8 text-center text-gray-600">
        Aucun post disponible.
      </section>
    );
  }

  return (
    <section className="max-w-4xl px-4 mx-auto mt-10 space-y-8">
      {/* Hero post */}
      <section>
        <PostCard post={posts[0]} large />
      </section>

      {/* Deux posts côte à côte */}
      <section className="flex flex-col md:flex-row md:gap-6">
        {posts.slice(1, 3).map((post) => (
          <div key={post._id} className="flex-1 mb-6 md:mb-0">
            <PostCard post={post} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default PostsList;
