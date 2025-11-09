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

  const avgRatingStar = Array.from({ length: avg_rating }).fill(0);
  const notRatedStar = Array.from({ length: rating - avg_rating }).fill(1);

  const totalStar = [...avgRatingStar, ...notRatedStar];

  return (
    <div className="bg-white w-full h-full relative group rounded-t-3xl">
      <div className="text-left ">
        <img className="w-full" src={img_link} alt="Card Image" />
        <div className="p-5 space-y-2">
          <p className="text-2xl text-primary font-semibold whitespace-nowrap">
            {title}
          </p>
          <p className="font-semibold">{category}</p>
          <div className="text-2xl text-complementary font-semibold">
            <span>
              $ {price.min} - {price.max}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {totalStar.map((item,index) => {
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
            <p>{`(${total_comments})`}</p>
          </div>
        </div>
        <div className="group-hover:opacity-0">
          <AddToCartBtn text={"Add To Cart"} />
        </div>
      </div>
      <div className="absolute w-full h-full bg-white top-0 bottom-0 opacity-50 z-10 group-hover:block hidden rounded-t-3xl">
        <span className="absolute bottom-0 left-0 right-0">
          <AddToCartBtn text={"View Details"} />
        </span>
      </div>
      <div className="group-hover:block hidden absolute top-[40%] left-10 right-10 z-20">
        <AddToCartBtn text={"Add To Cart"} />
      </div>
    </div>
  );
};

export default ProductCard;
