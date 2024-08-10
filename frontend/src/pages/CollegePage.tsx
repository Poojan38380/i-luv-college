import { useParams } from "react-router-dom";
import UseGetSingleCollege from "@/hooks/Colleges/UseGetSingleCollege";
import CollegeProfile from "@/components/CollegeProfile/CollegeProfile";
import CollegePageSkeleton from "@/components/CollegeProfile/CollegePageSkeleton";

const CollegePage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();

  if (!collegeId) return <div>Invalid Id</div>;

  const { loading, college } = UseGetSingleCollege({ collegeId });

  if (loading) return <CollegePageSkeleton />;
  if (!college) return <div>No college found</div>;

  return (
    <div className="min-h-screen  px-10 mq725:px-5  py-24 mq725:pb-24">
      <CollegeProfile college={college} />
    </div>
  );
};

export default CollegePage;
