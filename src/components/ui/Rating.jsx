const Rating = ({ avg_rating, rating, total_reviews }) => {
  const avgRatingStar = Array.from({ length: avg_rating }).fill(0);
  const notRatedStar = Array.from({ length: rating - avg_rating }).fill(1);

  const totalStar = [...avgRatingStar, ...notRatedStar];

  return (
    <div className="flex items-center gap-2">
      {totalStar.map((item, index) => {
        return item === 0 ? (
          <span key={index} className="text-3xl text-complementary">
            &#9733;
          </span>
        ) : (
          <span key={index} className="text-3xl">
            &#9734;
          </span>
        );
      })}
      {total_reviews && <p className="font-semibold">{`(${total_reviews})`}</p>}
    </div>
  );
};

export default Rating;
