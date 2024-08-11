import { College } from "@/hooks/Colleges/UseGetAllColleges";
import Carousel from "./Carousel";
import LikeCollege from "./LikeCollege";
import AddPost from "../Posts/AddPost";
import PostContainer from "../Posts/PostContainer";
import ShareButtons from "../utils/ShareButtons";
import AddImages from "./AddImages";

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

  const pageTitle = `${college.name} • Hate Page •`;

  return (
    <div className="">
      <div className="flex  px-10 mq725:px-5 items-center  mq800:flex-col gap-10">
        <div className="">
          {college.images.length > 0 && (
            <Carousel images={college.images.slice(0, 5)} />
          )}
          {college.images.length === 0 && (
            <div className=" mq800:mx-auto w-96 mq500:w-full mq500:px-14 relative bg-base-200 h-96 rounded-box shadow-lg flex items-center justify-center text-gray-500">
              Be the first to upload an image!
            </div>
          )}
        </div>
        <div className="flex flex-col w-full     ">
          <div>
            <h1 className="text-3xl font-bold">{college.name}</h1>
            <h1 className="text-lg font-semibold">{college.description}</h1>
          </div>
          <div className="mt-7 flex justify-between">
            <div>
              <p className="text-sm text-base-content">
                Created by {college.creator.username}
              </p>
              <p className="text-sm text-base-content">
                Created at {formattedDate}
              </p>
            </div>
            <div className="mt-[-15px]">
              <LikeCollege
                collegeId={college.id}
                collegeLikes={college.likes}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-5 px-10 mq725:px-5 text-center">
        <ShareButtons
          center={true}
          title={pageTitle}
          message={"Check out this college hate page"}
        />
      </div>
      <div className="mt-20 py-20 bg-base-200 flex mq800:flex-col px-10 mq725:px-5 gap-6 ">
        <div>
          <AddPost collegeId={college.id} />
          <div className="px-10 mt-5">
            <AddImages collegeId={college.id} />
          </div>
        </div>
        <PostContainer collegeId={college.id} />
      </div>
    </div>
  );
};

export default CollegeProfile;
