import { useGetPostById } from "@/hooks/posts/useGetPostById";
import { useSearchParams } from "react-router-dom";

const Post = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const { data: post, isLoading, error } = useGetPostById(postId);

  if (!postId)
    return (
      <p className="mt-8 text-center text-red-600">ID du post introuvable.</p>
    );

  if (isLoading) return <p className="mt-8 text-center">Chargement…</p>;

  if (error)
    return (
      <p className="mt-8 text-center text-red-600">Erreur : {error.message}</p>
    );

  if (!post) return <p className="mt-8 text-center">Aucun post trouvé.</p>;

  return (
    <main className="max-w-2xl px-4 mx-auto mt-10">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto mb-6"
        />
      )}

      <h1 className="mb-2 text-xl font-bold">{post.title}</h1>

      <p className="mb-4 text-sm text-gray-600">
        Par <strong>{post.author}</strong> —{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <div className="mb-6 text-base whitespace-pre-line">{post.content}</div>

      {post.tags?.length > 0 && (
        <div className="mb-6 text-sm">
          {post.tags.map((tag) => (
            <span key={tag} className="mr-2">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {post.updatedAt && (
        <p className="text-xs text-right text-gray-500">
          Modifié le {new Date(post.updatedAt).toLocaleDateString()}
        </p>
      )}
    </main>
  );
};

export default Post;
