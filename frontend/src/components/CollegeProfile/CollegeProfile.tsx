import { College } from "@/hooks/Colleges/UseGetAllColleges";
import Tabs from "./Tabs";
import Carousel from "./Carousel";

interface CollegeProfileProps {
  college: College;
}

const CollegeProfile = ({ college }: CollegeProfileProps) => {
  return (
    <div className="  ">
      <div className="flex items-center mq800:flex-col gap-4">
        <div className="">
          {college.images.length > 0 && (
            <Carousel images={college.images.slice(0, 5)} />
          )}
        </div>
        <div className="flex flex-col mq800:items-center  ">
          <h1 className="text-3xl font-bold">{college.name}</h1>
          <p className="text-sm text-gray-600">
            Created by {college.creator.username}
          </p>
        </div>
      </div>
      <div className="mt-8 ">
        <Tabs />
      </div>
    </div>
  );
};

export default CollegeProfile;
