import { AboutSectionImg } from "@/constants/images";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 mq725:grid-cols-1 items-center gap-10 mt-20">
      <div>
        <img src={AboutSectionImg} alt="Hero" />
      </div>
      <div>
        <div className="font-bangers  text-right text-9xl mq725:text-7xl">
          <span className="text-accent ">Let it all out</span> !!!
        </div>
        <div className="text-2xl mq725:text-xl font-medium text-right flex flex-col justify-end items-end ">
          Find your college, listen what others are saying,
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
