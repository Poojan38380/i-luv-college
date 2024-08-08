import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddNew = () => {
  return (
    //     <div className="card bg-base-100  w-96 shadow-xl">
    //       <div className="card-body">
    //         <h2 className="card-title">Can't find your college?</h2>
    //         <div className="flex flex-col gap-3">
    //           <span>Add your college to our platform!</span>
    //           <span> Be the first one to share a shitty experience</span>
    //         </div>
    //         <div className="card-actions justify-end">
    //           <button className="btn btn-primary">
    //             <FaPlus /> Add Your College
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title text-3xl">Can't find your sh*tty college?</h2>
        <div className="flex flex-col  mt-7 gap-1">
          <span>Add your college !!!</span>
          <span>
            Be the first one to share the most sh*tty experience a college has
            given anyone.
          </span>
        </div>
        <div className="card-actions mt-3  justify-center">
          <Link to={"add"} className="w-full">
            <button className="btn btn-block ">
              <FaPlus /> Add Your College
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
