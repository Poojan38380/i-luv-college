import { College } from "@/hooks/Colleges/UseGetAllColleges";
import Tabs from "./Tabs";
import Carousel from "./Carousel";

interface CollegeProfileProps {
  college: College;
}

const CollegeProfile = ({ college }: CollegeProfileProps) => {
  const formattedDate = new Date(college.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="">
      <div className="flex items-center mq800:items-start mq800:flex-col gap-10">
        <div className="">
          {college.images.length > 0 && (
            <Carousel images={college.images.slice(0, 5)} />
          )}
          {college.images.length === 0 && (
            <div className="min-w-full w-96 relative bg-base-200 h-96 rounded-box shadow-lg flex items-center justify-center text-gray-500">
              Be the first to upload an image!
            </div>
          )}
        </div>
        <div className="flex flex-col   ">
          <div>
            <h1 className="text-3xl font-bold">{college.name}</h1>
            <h1 className="text-lg font-semibold">{college.description}</h1>
          </div>
          <div className="mt-7">
            <p className="text-sm text-base-content">
              Created by {college.creator.username}
            </p>
            <p className="text-sm text-base-content">
              Created at {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Tabs />
      </div>
    </div>
  );
};

export default CollegeProfile;
