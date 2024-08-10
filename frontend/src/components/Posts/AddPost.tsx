import { useAuthContext } from "@/contexts/useAuthContext";
import UseCreatePost from "@/hooks/Posts/UseCreatePost";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AddPost = ({ collegeId }: { collegeId: string }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { loading, createPost } = UseCreatePost();
  const { authUser } = useAuthContext();

  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hidden on screens larger than 800px */}
      <div className="card bg-base-100 text-base-content h-min  mq800:hidden hover:shadow-lg">
        <div className="card-body min-w-[450px] mq1000:min-w-[350px]">
          <h2 className="card-title font-bold">Add a Post</h2>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-500">
              Short, descriptive title
            </label>
            <input
              type="text"
              placeholder="Title..."
              className="input input-bordered mt-1 w-full"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-500">
              Description
            </label>
            <textarea
              placeholder="The login button color should be green to match our brand colors."
              className="textarea textarea-bordered mt-1 w-full"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          {!authUser ? (
            <Link to={"/auth/login"}>
              <button
                onClick={() => {}}
                className={`btn btn-primary btn-block mt-4 `}
                type="button"
              >
                Log In to Post
              </button>
            </Link>
          ) : (
            <button
              onClick={async () => {
                await createPost(title, description, collegeId);
              }}
              className={`btn btn-primary btn-block mt-4 ${
                loading ? "loading" : ""
              }`}
              disabled={loading}
              type="button"
            >
              Create Post
            </button>
          )}
        </div>
      </div>

      {/* Display on screens smaller than 800px */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary btn-block    mq800:block hidden"
      >
        Add a Post
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="card-title font-bold">Add a Post</h2>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-500">
                Short, descriptive title
              </label>
              <input
                type="text"
                placeholder="Title..."
                className="input input-bordered mt-1 w-full"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-500">
                Description
              </label>
              <textarea
                placeholder="The login button color should be green to match our brand colors."
                className="textarea textarea-bordered mt-1 w-full"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>

            <div className="modal-action">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              {!authUser ? (
                <Link to={"/auth/login"}>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                    className={`btn btn-primary `}
                    type="button"
                  >
                    Log In to Post
                  </button>
                </Link>
              ) : (
                <button
                  onClick={async () => {
                    await createPost(title, description, collegeId);
                    setIsModalOpen(false);
                  }}
                  className={`btn btn-primary ${loading ? "loading" : ""}`}
                  disabled={loading}
                  type="button"
                >
                  Create Post
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPost;
