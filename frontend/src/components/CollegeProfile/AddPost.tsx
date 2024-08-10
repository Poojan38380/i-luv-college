import UseCreatePost from "@/hooks/Posts/UseCreatePost";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const AddPost = ({ collegeId }: { collegeId: string }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { loading, createPost } = UseCreatePost();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full max-w-xs mb-4"
      />
      <textarea
        placeholder="Description"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
        className="textarea textarea-bordered w-full max-w-xs mb-4"
      />

      <button
        onClick={async () => {
          await createPost(title, description, collegeId);
        }}
        className={`btn btn-primary w-full max-w-xs ${
          loading ? "loading" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Post"}
      </button>
    </div>
  );
};

export default AddPost;
