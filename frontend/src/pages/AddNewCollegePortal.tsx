import React, { useState, ChangeEvent } from "react";
import WelcomeUser from "@/components/utils/WelcomeUser";

const AddNewCollegePortal: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      setImages(imageUrls);
    }
  };

  return (
    <div className="min-h-screen px-10 mq725:px-5 py-24 mq725:pb-24">
      <WelcomeUser />

      <div className=" mx-auto">
        <div className="card bg-primary mt-7 text-primary-content shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold mb-4">
              Add Your College
            </h2>
            <p className="text-lg">
              Ready to spill the tea? Write the real truth about your college,
              you are given comple freedom
            </p>
          </div>
        </div>

        <form className="bg-base-100  space-y-6">
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                College Name
              </span>
            </label>
            <input
              type="text"
              placeholder="What's your college called?"
              className="input  input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Description
              </span>
            </label>
            <textarea
              placeholder="Go on, tell us the most outrageous stories about your college! Don't hold back..."
              className="textarea   textarea-bordered w-full h-32 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Add College Images
              </span>
            </label>
            <input
              type="file"
              multiple
              className="file-input  file-input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={handleImageUpload}
            />
            <p className="mt-2 text-sm text-base-content mb-5">
              Upload pics that perfectly capture the madness. (We promise, no
              one will judge!)
            </p>

            {/* Image Preview Section */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="w-full h-52 border border-base-content rounded-lg overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Uploaded preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form-control mt-8">
            <button className="btn btn-accent btm-nav-lg w-full text-xl my-6 mb-16">
              Share Your Dumprack College with the World
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCollegePortal;
