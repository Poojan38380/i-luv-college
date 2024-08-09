import ErrorToast from "@/components/Toasts/ErrorToast";
import { useEffect, useState } from "react";
import { College } from "./UseGetAllColleges";

const UseGetSingleCollege = ({ collegeId }: { collegeId: string }) => {
  const [loading, setLoading] = useState(false);
  const [college, setCollege] = useState<College>();

  useEffect(() => {
    const getCollege = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/colleges/single/${collegeId}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setCollege(data);
      } catch (error: any) {
        console.error("Error in UseGetSingleCollege hook ");

        ErrorToast(error);
      } finally {
        setLoading(false);
      }
    };
    getCollege();
  }, []);

  return { loading, college };
};

export default UseGetSingleCollege;
