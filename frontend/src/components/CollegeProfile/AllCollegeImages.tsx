import React from "react";
import ImageCard from "./ImageCard";
import useAllCollegeImages from "@/hooks/Colleges/useAllCollegeImages";

const AllCollegeImages: React.FC<{ collegeId: string }> = ({ collegeId }) => {
  const { images, loading } = useAllCollegeImages(collegeId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (images.length === 0) {
    return (
      <div className="card bg-primary w-full text-primary-content h-min mq800:mt-3">
        <div className="card-body gap-4 py-10 ">
          <h2 className="card-title  text-3xl">
            No images about this college yet!
          </h2>
          <p className=" ">Share this page or be the first person to upload!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageURL={image.imageURL}
          likes={image.likes}
        />
      ))}
    </div>
  );
};

export default AllCollegeImages;
