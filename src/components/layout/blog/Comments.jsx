import { FaCheck, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
const Comments = ({ data }) => {
  const {
    user_img,
    user_name,
    comment_date,
    how_many_days_ago,
    comment,
    helpful,
    not_helpful,
  } = data;
  return (
    <div className="py-5">
      <div className="flex items-end justify-between lg:justify-normal gap-4">
        <div className="flex items-end gap-4">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={user_img}
            alt="user image"
          />
          <div className="space-y-1">
            <p className="text-xl font-semibold">{user_name}</p>
            <p className="text-sm flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-white p-1 rounded-lg">
              <FaCheck />
              Verified purchase
            </p>
          </div>
        </div>
        <p className="text-right flex flex-col lg:flex-row gap-2 lg:text-left ">
          {how_many_days_ago} Days ago <span>({comment_date})</span>
        </p>
      </div>
      <div>
        <div className="my-5">
          <p className="taxt-xl text-primary border-[1px] p-2 lg:p-5">{comment}</p>
          <div className="flex items-center gap-10 py-7">
            <p className="flex items-center gap-2">
              <FaRegThumbsUp/>
              <span>Helpfull ({helpful})</span>
            </p>
            <p className="flex items-center gap-2">
              <FaRegThumbsDown />
              <span>Helpfull ({not_helpful})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
