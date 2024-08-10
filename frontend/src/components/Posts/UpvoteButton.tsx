import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const UpvoteButton = ({
  postId,
  upvoteLength,
}: {
  postId: string;
  upvoteLength: number;
}) => {
  return (
    <button className="btn btn-outline flex flex-row gap-4 ">
      <div>
        <MdOutlineKeyboardArrowUp />
      </div>
      <div>{upvoteLength}</div>
    </button>
  );
};

export default UpvoteButton;
