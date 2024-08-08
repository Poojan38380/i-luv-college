import AddNew from "@/components/Colleges/AddNew";
import WelcomeUser from "@/components/utils/WelcomeUser";

const Colleges = () => {
  return (
    <div className="min-h-screen px-10 mq725:px-5 pt-24 mq725:pb-24">
      <div>
        <WelcomeUser />
      </div>

      <div className="flex flex-wrap py-10">
        <AddNew />
      </div>
    </div>
  );
};

export default Colleges;
