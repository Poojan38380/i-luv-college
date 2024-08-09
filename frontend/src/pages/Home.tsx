import { HeroImage } from "@/constants/images";

const Home = () => {
  return (
    <div className="min-h-screen px-10 mq725:px-5 pt-16 grid grid-cols-2 mq725:grid-cols-1 mq725:min-h-full items-center bg-base-100 pb-24">
      <div className="order-1 mq725:order-2 flex flex-col gap-10 mq725:gap-5">
        <div className="font-bangers text-9xl mq725:text-7xl">
          <span className="text-accent ">College</span> Got You{" "}
          <span className="text-accent ">Down?</span>
        </div>
        <div className="text-2xl mq725:text-xl font-medium">
          <span className="text-accent ">Anonymously</span> post your
          frustrations and connect with fellow students.{" "}
          <span className="text-accent">
            Let it all out and feel the relief!
          </span>
        </div>
      </div>
      <div className="order-2 mq725:order-1">
        <img src={HeroImage} />
      </div>
    </div>
  );
};

export default Home;
