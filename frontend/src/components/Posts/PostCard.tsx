import { Post } from "@/hooks/Posts/UseGetPostsByCollege";
import { FC } from "react";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="card bg-base-100 ">
      <div className="card-body">
        <h2 className="card-title  font-bold mq500:text-lg ">
          {post.postTitle}
        </h2>
        <p className="text-sm text-gray-600">{post.postDescription}</p>
      </div>
    </div>
  );
};

export default PostCard;
