import { Post } from "@/hooks/Posts/UseGetPostsByCollege";
import { FC } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import UpvoteButton from "./UpvoteButton";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className="card bg-base-100 ">
      <div className="card-body flex flex-row justify-between items-center gap-3">
        <div>
          <h2 className="card-title  font-bold mq500:text-lg ">
            {post.postTitle}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{post.postDescription}</p>
          <FaRegCommentAlt className="text-gray-500 mt-5" />
        </div>
        <div>
          <UpvoteButton postId={post.id} upvoteLength={post.upvotes} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
