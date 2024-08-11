import { useParams } from "react-router-dom";
import UseGetSingleCollege from "@/hooks/Colleges/UseGetSingleCollege";
import CollegeProfile from "@/components/CollegeProfile/CollegeProfile";
import CollegePageSkeleton from "@/components/CollegeProfile/CollegePageSkeleton";
import NotFound from "./NotFound";

const CollegePage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();

  if (!collegeId) return <div>Invalid Id</div>;

  const { loading, college } = UseGetSingleCollege({ collegeId });

  if (loading) return <CollegePageSkeleton />;
  if (!college) return <NotFound />;

  return (
    <div className="min-h-screen   pt-24 ">
      <CollegeProfile college={college} />
    </div>
  );
};

export default CollegePage;
