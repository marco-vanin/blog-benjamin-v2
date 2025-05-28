import PostsList from "@/components/posts/PostsList.component";
import { ModeToggle } from "@/components/ToggleMode.component";

const Home = () => {
  return (
    <>
      <div className="flex justify-end p-8">
        <ModeToggle />
      </div>

      <h1 className="mb-8 text-4xl font-bold text-center">
        Welcome to the Blog
      </h1>

      <PostsList />
    </>
  );
};

export default Home;
  