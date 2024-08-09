import { useState } from "react";
import AddNew from "@/components/Colleges/AddNew";
import UseGetAllColleges from "@/hooks/Colleges/UseGetAllColleges";
import CollegeCard from "@/components/Colleges/CollegeCard";
import SearchBar from "./SearchBar";
import WelcomeUser from "@/components/utils/WelcomeUser";

const Colleges = () => {
  const { loading, colleges } = UseGetAllColleges();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen px-10 mq725:px-5 py-24 mq725:pb-24">
      <div className="flex  justify-between mq725:flex-col gap-10">
        <WelcomeUser />
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-8">
        <AddNew />
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="skeleton h-48 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))
          : filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                id={college.id}
                name={college.name}
                description={college.description}
                imageURL={college.images[0]?.imageURL}
              />
            ))}
      </div>
    </div>
  );
};

export default Colleges;
