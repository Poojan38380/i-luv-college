import { Link } from "react-router-dom";

interface CollegeCardProps {
  id: string;
  name: string;
  description: string;
  imageURL?: string;
}

const CollegeCard: React.FC<CollegeCardProps> = ({
  id,
  name,
  description,
  imageURL,
}) => {
  // Truncate description to the first 200 characters
  const truncatedDescription =
    description.length > 200 ? `${description.slice(0, 200)}...` : description;

  return (
    <Link to={`/colleges/${id}/posts`} className="w-full">
      <div
        key={id}
        className="card  shadow-md hover:shadow-xl transition-all duration-500"
      >
        <figure>
          {imageURL ? (
            <img
              src={imageURL}
              alt={name}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-base-300 flex items-center justify-center text-gray-500">
              Be the first to upload an image!
            </div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase">{name}</h2>
          <p>{truncatedDescription}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
