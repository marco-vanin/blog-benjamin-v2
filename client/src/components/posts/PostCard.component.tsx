import type { IPost } from "@/types/post";
import { Link } from "react-router-dom";

interface Props {
  post: IPost;
  large?: boolean;
}

const PostCard = ({ post, large }: Props) => {
  const tag = post.tags?.[0]?.toLowerCase() || "blog";
  const createdAt =
    typeof post.createdAt === "string"
      ? new Date(post.createdAt).toLocaleDateString()
      : post.createdAt instanceof Date
      ? post.createdAt.toLocaleDateString()
      : "";

  return (
    <Link
      to={{ pathname: "/post", search: "?id=" + post._id }}
      className="block p-4 border border-gray-200 dark:border-gray-700"
    >
      <div
        className={`flex flex-col ${
          large ? "lg:flex-row gap-6" : "sm:flex-row gap-4"
        }`}
      >
        {post.imageUrl && (
          <div
            className={
              large
                ? "lg:w-1/2 w-full mb-4 lg:mb-0"
                : "sm:w-1/3 w-full mb-4 sm:mb-0"
            }
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="object-cover w-full h-auto"
            />
          </div>
        )}

        <div className="flex-1">
          <span className="inline-block mb-2 text-xs text-gray-500">
            #{tag}
          </span>

          <h2
            className={`${
              large ? "text-xl" : "text-lg"
            } font-medium text-gray-900 dark:text-gray-100 mb-2`}
          >
            {post.title}
          </h2>

          {large && (
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
              {post.content.slice(0, 180)}...
            </p>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {post.author} — {createdAt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
