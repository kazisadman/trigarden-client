import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ data }) => {
  const {
    img_link,
    title,
    category,
    price,
    rating,
    total_comments,
    avg_rating,
  } = data;
  console.log(img_link);

  const avgRatingStar = Array.from({ length: avg_rating }).fill(0);
  const notRatedStar = Array.from({ length: rating - avg_rating }).fill(1);

  const totalStar = [...avgRatingStar, ...notRatedStar];

  return (
    <div className="bg-white w-full h-full">
      <div className="text-left">
        <img src={img_link} alt="Card Image" />
        <div className="p-5 space-y-2">
          <p className="text-2xl text-primary font-semibold whitespace-nowrap">{title}</p>
          <p className="font-semibold">{category}</p>
          <div className="text-2xl text-complementary font-semibold">
            <span>
              $ {price.min} - {price.max}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {totalStar.map((item) => {
              return item === 0 ? (
                <span className="text-3xl text-complementary">&#9733;</span>
              ) : (
                <span className="text-3xl">&#9734;</span>
              );
            })}
            <p>{`(${total_comments})`}</p>
          </div>
        </div>
      </div>

      <AddToCartBtn />
    </div>
  );
};

export default ProductCard;
