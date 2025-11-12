import { FaCheck, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import Rating from "../../ui/Rating";

const Reviews = ({ data }) => {
  const {
    user_img,
    user_name,
    review_date,
    how_many_days_ago,
    review,
    helpful,
    not_helpful,
    rating,
    avg_rating,
    reply,
    product_img,
  } = data;

  return (
    <div className="py-5 w-full">
      <div className="flex items-end justify-between lg:justify-normal gap-4 py-5">
        <div className="flex items-center lg:items-end gap-4">
          <div className="w-16 h-16">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user_img}
              alt="user image"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xl font-semibold">{user_name}</p>
            <p className="text-sm flex items-center justify-center gap-2 whitespace-nowrap bg-primary text-white p-1 rounded-lg">
              <FaCheck />
              Verified purchase
            </p>
            <p className="show-sm">
              <Rating rating={rating} avg_rating={avg_rating} />
            </p>
          </div>
        </div>
        <p className="flex justify-between w-full items-end">
          <span>
            {how_many_days_ago} ({review_date})
          </span>
          <span className="show-lg">
            <Rating rating={rating} avg_rating={avg_rating} />
          </span>
        </p>
      </div>
      {product_img.length > 0 && (
        <div className="flex items-center gap-4">
          {product_img.map((item, index) => (
            <img
              className="w-24 h-24 object-cover rounded-xl"
              key={index}
              src={item}
            />
          ))}
        </div>
      )}
      <div>
        <div className="my-5">
          <p className="taxt-xl text-primary border-[1px] p-2 lg:p-5">
            {review}
          </p>
          <div className="flex items-center gap-10 py-7">
            <p className="flex items-center gap-2">
              <FaRegThumbsUp />
              <span>Helpfull ({helpful})</span>
            </p>
            <p className="flex items-center gap-2">
              <FaRegThumbsDown />
              <span>Helpfull ({not_helpful})</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-l-4 border-primary p-3 relative">
        <div className="relative z-20 space-y-5">
          <p className="font-semibold text-primary">
            Reply from Trigarden <span>({reply.reply_date})</span>
          </p>
          <p className="text-lg text-primary">{reply.reply}</p>
        </div>
        <div className="absolute bg-[#7A9B57] inset-0 opacity-10 z-10"></div>
      </div>
    </div>
  );
};

export default Reviews;
