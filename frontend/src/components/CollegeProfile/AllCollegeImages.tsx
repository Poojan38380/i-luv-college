import React from "react";
import ImageCard from "./ImageCard";
import useAllCollegeImages from "@/hooks/Colleges/useAllCollegeImages";

const AllCollegeImages: React.FC<{ collegeId: string }> = ({ collegeId }) => {
  const { images, loading } = useAllCollegeImages(collegeId);

  if (loading) {
    return <div>Loading...</div>;
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
