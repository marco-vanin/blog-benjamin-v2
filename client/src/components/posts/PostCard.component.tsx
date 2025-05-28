import type { IPost } from "@/types/post";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  post: IPost;
  large?: boolean;
}

// Associe chaque tag à une couleur (tu peux l'étendre) //TODO: a mettre ailleurs et mieux gerer
const tagColors: Record<string, string> = {
  introduction: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  update: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  info: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100",
};

const PostCard = ({ post, large }: Props) => {
  const tag = post.tags?.[0]?.toLowerCase() || "blog";
  const tagStyle =
    tagColors[tag] ||
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";

  const createdAt =
    post.createdAt instanceof Date
      ? post.createdAt.toLocaleDateString()
      : post.createdAt;

  const Image = (
    <a href="#">
      <img
        className="object-cover w-full rounded-xl"
        src={post.imageUrl}
        alt={post.title}
      />
    </a>
  );

  const Meta = (
    <>
      <Badge className={`mb-4 ${tagStyle}`}>{tag}</Badge>
      <h2
        className={`mb-3 ${
          large ? "text-2xl md:text-3xl" : "text-lg"
        } font-semibold text-gray-900 dark:text-gray-100`}
      >
        <a href="#">{post.title}</a>
      </h2>
      {large && (
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          {post.content.slice(0, 180)}...
        </p>
      )}
      <div className="flex items-center text-sm text-muted-foreground dark:text-gray-400 gap-2.5">
        <span>{post.author}</span>
        <span className="flex w-[3px] h-[3px] rounded-full bg-gray-400 dark:bg-gray-600 mx-2"></span>
        <span>{createdAt}</span>
      </div>
    </>
  );

  return (
    <Card
      className={
        large
          ? "w-full bg-white dark:bg-zinc-900 shadow-1 rounded-xl p-4 lg:p-2.5"
          : "w-full bg-white dark:bg-zinc-900 shadow-1 rounded-xl p-2.5"
      }
    >
      <CardContent
        className={`p-0 flex gap-6 ${
          large
            ? "flex-col lg:flex-row lg:items-center"
            : "flex-col sm:flex-row sm:items-center"
        }`}
      >
        <div
          className={
            large ? "lg:max-w-[536px] w-full" : "lg:max-w-[238px] w-full"
          }
        >
          {Image}
        </div>
        <div className="w-full">{Meta}</div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
