import { AboutSectionImg } from "@/constants/images";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 mq725:px-5  grid grid-cols-2 mq725:grid-cols-1 items-center gap-10 mt-20">
      <div>
        <img src={AboutSectionImg} alt="Hero" />
      </div>
      <div>
        <div className="font-bangers  text-right mq725:text-center   text-9xl mq725:text-7xl">
          Find your <span className="text-accent "> tribe</span>
        </div>
        <div className="text-2xl mq725:text-xl mt-6 font-medium text-right mq725:text-center  flex flex-col  items-end mq725:items-center  ">
          Find your college, listen to what others are saying,
          <span className="text-accent ">upvote their ideas</span>or express
          your own.
          <button
            className="btn btn-outline btn-accent   max-w-xs btn-lg mt-7"
            onClick={() => {
              navigate("colleges");
            }}
          >
            Explore Colleges
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
