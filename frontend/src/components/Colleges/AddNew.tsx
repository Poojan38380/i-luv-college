import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddNew = () => {
  return (
    <div className="card bg-primary glass text-primary-content mq450:w-full">
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-3xl">
            Can't find your sh*tty college?
          </h2>
          <div className="flex flex-col  mt-3 gap-1 justify-center">
            <span>Add your college !!!</span>
            <span>
              Be the first one to share the most sh*tty experience a college has
              given anyone.
            </span>
          </div>
        </div>

        <div className="card-actions mt-3  justify-center">
          <Link to={"add"} className="w-full">
            <button className="btn btn-block  ">
              <FaPlus /> Add Your College
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
