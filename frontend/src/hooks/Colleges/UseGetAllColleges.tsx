import ErrorToast from "@/components/Toasts/ErrorToast";
import { useEffect, useState } from "react";

export type College = {
  id: string;
  createdAt: Date;
  name: string;
  description: string;
  createdBy: string;
  likes: number;
  creator: {
    username: string;
  };
  images: Image[];
};

export type Image = {
  id: string;
  imageURL: string;
  likes: number;
  uploadedBy: string;
  collegeId: string;
};

const UseGetAllColleges = () => {
  const [loading, setLoading] = useState(false);
  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    const getColleges = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/colleges/getall`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setColleges(data);
      } catch (error: any) {
        console.error("Error in UseGetAllColleges hook ");

        ErrorToast(error);
      } finally {
        setLoading(false);
      }
    };
    getColleges();
  }, []);

  return { loading, colleges };
};

export default UseGetAllColleges;
