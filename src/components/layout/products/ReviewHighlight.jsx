import SectionTitle from "../../ui/SectionTitle";

const ReviewHighlight = ({ data }) => {
  return (
    <div className="bg-white p-10 rounded-lg w-full my-10">
      <div className="text-center lg:text-left">
        <p className="text-4xl font-bold text-primary py-10">Review Highlights</p>
      </div>
      <div className="flex flex-wrap gap-5 items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative rounded-full p-2 flex justify-center items-center text-center"
          >
            <p
              className={`z-20 relative font-semibold`}
              style={{ color: `${item.color}` }}
            >
              {item.text}
            </p>
            <div
              className={`absolute opacity-20 inset-0 z-10 rounded-full`}
              style={{ backgroundColor: `${item.color}` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewHighlight;
