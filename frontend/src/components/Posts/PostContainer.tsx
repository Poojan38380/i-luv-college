import { FC } from "react";
import PostCard from "./PostCard";
import UseGetPostsByCollege from "@/hooks/Posts/UseGetPostsByCollege";

interface PostContainerProps {
  collegeId: string;
}

const PostContainer: FC<PostContainerProps> = ({ collegeId }) => {
  const { loading, posts } = UseGetPostsByCollege(collegeId);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-8">No posts available.</div>;
  }

  return (
    <div className=" grow flex flex-col gap-6 mq800:gap-4 ">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
