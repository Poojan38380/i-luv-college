import React from "react";

interface ImageCardProps {
  imageURL: string;
  likes: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageURL, likes }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={imageURL}
        alt="College Image"
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 flex items-center">
        <span className="text-gray-700">{likes}</span>
      </div>
    </div>
  );
};

export default ImageCard;
