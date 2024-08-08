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

      <div className="card bg-primary text-primary-content mt-4">
        <div className="card-body">
          <h2 className="card-title text-3xl">Add your College!!!</h2>
          <p className="mt-2">
            Hey there! Ready to spill the tea? Tell us all about your
            college—whether it's the good, the bad, or the absolutely
            ridiculous. We want the juicy details, the things that make you roll
            your eyes, and the stories you'll be telling for years to come.
          </p>
        </div>
      </div>

      <form className="mt-6 space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">College Name</span>
          </label>
          <input
            type="text"
            placeholder="What's your college called?"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Description</span>
          </label>
          <textarea
            placeholder="Go on, tell us the most outrageous sh*t about your college! Don't hold back..."
            className="textarea textarea-bordered w-full h-32"
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Add College Images</span>
          </label>
          <input
            type="file"
            multiple
            className="file-input file-input-bordered w-full"
            onChange={handleImageUpload}
          />
          <p className="mt-2 text-sm text-gray-500">
            Upload pics that perfectly capture the madness. (We promise, no one
            will judge!)
          </p>

          {/* Image Preview Section */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full h-48 border rounded overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Uploaded preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="form-control mt-8">
          <button className="btn btn-accent w-full">
            🚀 Submit and Let the World Know!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCollegePortal;
