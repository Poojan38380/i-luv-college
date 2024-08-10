import UseAddComment from "@/hooks/Comments/UseAddComment";
import React, { useState } from "react";

const CommentForm = ({ postId }: { postId: string }) => {
  const [content, setContent] = useState("");
  const { loading, AddComment } = UseAddComment(postId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      await AddComment(content);
      setContent(""); // Clear the form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="form-control">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Leave a comment..."
          value={content}
          rows={2}
          onChange={(e) => setContent(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      {content && (
        <div className="form-control mt-4">
          <button
            type="submit"
            className={`btn btn-primary ${loading ? "loading" : "animate-pop"}`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Comment"}
          </button>
        </div>
      )}
    </form>
  );
};

export default CommentForm;
