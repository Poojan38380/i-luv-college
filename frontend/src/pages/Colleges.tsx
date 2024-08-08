import AddNew from "@/components/Colleges/AddNew";
import WelcomeUser from "@/components/utils/WelcomeUser";

const Colleges = () => {
  return (
    <div className="min-h-screen px-10 mq725:px-5 pt-24 mq725:pb-24">
      <div>
        <WelcomeUser />
      </div>

      <div className="flex flex-wrap mq450:justify-center py-10 mq450:flex-col w-full">
        <AddNew />
      </div>
    </div>
  );
};

export default Colleges;
