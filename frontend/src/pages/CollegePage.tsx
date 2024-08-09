import { useParams } from "react-router-dom";
import UseGetSingleCollege from "@/hooks/Colleges/UseGetSingleCollege";
import CollegeProfile from "@/components/CollegeProfile/CollegeProfile";

const CollegePage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();

  if (!collegeId) return <div>Invalid Id</div>;

  const { loading, college } = UseGetSingleCollege({ collegeId });

  if (loading)
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="flex items-center mq800:flex-col gap-4">
          <div className="skeleton h-96 w-96"></div>
          <div className="skeleton h-4  w-28"></div>
          <div className="skeleton h-4  w-28"></div>
          <div className="skeleton h-4  w-28"></div>
        </div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  if (!college) return <div>No college found</div>;

  return (
    <div className="min-h-screen  px-10 mq725:px-5  py-24 mq725:pb-24">
      <CollegeProfile college={college} />
    </div>
  );
};

export default CollegePage;
