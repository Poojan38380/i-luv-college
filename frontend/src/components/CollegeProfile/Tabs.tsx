import { useLocation, useNavigate } from "react-router-dom";

interface TabsProps {
  collegeId: string;
}

const Tabs = ({ collegeId }: TabsProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: `/colleges/page/${collegeId}`, label: "Posts" },
    { path: `/colleges/images/${collegeId}`, label: "College Images" },
  ];

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full mt-8">
      <div role="tablist" className="tabs tabs-bordered bg-base-200">
        {tabs.map((tab, index) => (
          <div
            key={index}
            role="tab"
            onClick={() => handleTabClick(tab.path)}
            className={`tab mt-5 pb-5 text-gray-500 text-center font-semibold cursor-pointer ${
              location.pathname === tab.path
                ? "tab-active text-base-content"
                : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
