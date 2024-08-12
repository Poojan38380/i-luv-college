import { FaCommentDots, FaThumbsUp, FaUniversity } from "react-icons/fa";

const AboutCardSection = () => {
  return (
    <div className="py-20 min-h-screen flex justify-center items-center bg-base-200 mt-20  pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            About Our Platform
          </h2>
          <p className="mt-2 text-3xl  leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl">
            Anonymously Share Your College Experiences
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Vent about your college, upvote posts, and connect with others who
            share your experiences.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card hover:shadow-xl duration-300 bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <FaCommentDots className="h-6 w-6" />
                </div>
                <h3 className="mt-8 card-title leading-6 ">
                  Anonymous Venting
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Share your college experiences and frustrations without
                  revealing your identity.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-xl duration-300 bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <FaThumbsUp className="h-6 w-6" />
                </div>
                <h3 className="mt-8 card-title leading-6 ">Upvote & Comment</h3>
                <p className="mt-2 text-base text-gray-500">
                  Engage with other users by upvoting posts and leaving
                  comments.
                </p>
              </div>
            </div>

            <div className="card hover:shadow-xl duration-300 bg-base-100 shadow-md">
              <div className="card-body">
                {" "}
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <FaUniversity className="h-6 w-6" />
                </div>
                <h3 className="mt-8 card-title leading-6 ">
                  College Community
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Connect with others from your college and see what they have
                  to say.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCardSection;
