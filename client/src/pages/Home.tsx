import PostsList from "@/components/posts/PostsList.component";

const Home = () => {
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-center">
        Welcome to the Blog
      </h1>

      <PostsList />
    </>
  );
};

export default Home;
