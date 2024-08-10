import { Post } from "@/hooks/Posts/UseGetPostsByCollege";
import { FC } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import UpvoteButton from "./UpvoteButton";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/post/comments/${post.id}`}>
      <div className="card bg-base-100 hover:shadow-lg duration-500  ">
        <div className="card-body flex flex-row justify-between items-center gap-3">
          <div>
            <h2 className="card-title  font-bold mq500:text-lg ">
              {post.postTitle}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{post.postDescription}</p>
            <FaRegCommentAlt className="text-gray-500 mt-5" />
          </div>
          <div>
            <UpvoteButton postId={post.id} initialUpvoteLength={post.upvotes} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
