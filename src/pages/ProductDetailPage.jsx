import { useParams } from "react-router-dom";

import data from "../Data/product.json";
import reviewsData from "../Data/reviews.json";

import Rating from "../components/ui/Rating";
import {
  FaAngleDown,
  FaDotCircle,
  FaMinus,
  FaPen,
  FaPlus,
  FaRegHeart,
} from "react-icons/fa";
import ProductOption from "../components/layout/products/ProductOption";
import { useState } from "react";
import AddToCartBtn from "../components/ui/AddToCartBtn";
import RecommendedProducts from "../components/layout/products/RecommendedProducts";
import SectionTitle from "../components/ui/SectionTitle";
import ProductCard from "../components/ui/ProductCard";
import CtaButton from "../components/ui/CtaButton";
import ReviewHighlight from "../components/layout/products/ReviewHighlight";

import reviewHighlightData from "../Data/reviewHighlights.json";
import Reviews from "../components/layout/products/Reviews";

const ProductDetailPage = () => {
  const [plantSize, setPlantSize] = useState("Medium");
  const [potSize, setPotSize] = useState("");

  const [quantity, setQuantity] = useState(0);

  const { name } = useParams();

  const product = data.find((item) => {
    return item.title === name;
  });

  const recommendedProduct = data.slice(0, 4);

  const relatedProduct = data.slice(4, 8);

  const {
    img_link,
    title,
    category,
    plant_size,
    pot_size,
    pot_color,
    description,
    stock,
    rating,
    avg_rating,
    total_reviews,
  } = product;

  const handleQuantity = (amount) => {
    if (quantity <= 0 && amount < 0) {
      return;
    }
    setQuantity((prev) => prev + amount);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Grid image */}
          <div className="grid grid-cols-4 gap-3 justify-items-center grid-rows-[635px_127px] flex-1">
            {img_link.map((item, index) => {
              return (
                <img
                  className={
                    index === 0
                      ? `col-span-4 row-span-1 w-[635px] h-[635px] object-cover rounded-lg`
                      : `w-[127px] h-[127px] object-cover rounded-lg`
                  }
                  key={index}
                  src={item}
                />
              );
            })}
          </div>

          <div className="relative flex-1">
            <p className="semi-bold-2xl-text">{title}</p>

            <div className="flex items-center justify-between gap-3">
              <Rating
                avg_rating={avg_rating}
                total_reviews={total_reviews}
                rating={rating}
              />
              <p className="flex items-center gap-3 text-xl whitespace-nowrap">
                <FaDotCircle />
                <span>{stock}</span>
              </p>
            </div>

            <p className="text-gray-500">{category}</p>

            {plant_size.length > 0 && (
              <ProductOption
                data={plant_size}
                title={"Size"}
                selectedSize={plantSize}
                setSelectedSize={setPlantSize}
              />
            )}

            {pot_size.length > 0 && (
              <ProductOption
                data={pot_size}
                title={"Include Pot"}
                selectedSize={potSize}
                setSelectedSize={setPotSize}
              />
            )}

            <div>
              {/* color option */}
              {pot_color.length > 0 && (
                <div>
                  <p className="semi-bold-2xl-text">Pot Color</p>

                  <div className="flex items-center gap-5">
                    {pot_color.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`w-[42px] h-[42px] border-[3px] rounded-full border-gray-500 cursor-pointer`}
                          style={{ backgroundColor: item }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div>
                <div className="divider"></div>
                <p className="max-h-[72px] overflow-hidden">{description}</p>
                <p className="text-complementary font-semibold">See more...</p>
                <div className="divider"></div>
              </div>

              <div className="flex justify-between items-end">
                <p className="text-5xl text-complementary">$ 350</p>
                <div className="flex flex-col items-center gap-2">
                  <p>Quantity</p>
                  <div className="flex items-center justify-between w-full text-3xl gap-5 border-[2px] p-1">
                    <button>
                      <FaMinus
                        onClick={() => handleQuantity(-1)}
                        className="cursor-pointer"
                      />
                    </button>
                    <p className="p-2 w-10">{quantity}</p>
                    <button>
                      <FaPlus
                        onClick={() => handleQuantity(1)}
                        className="cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="py-10">
                <AddToCartBtn text={"Add To Cart"} />
              </div>

              <div className="absolute top-0 right-0 border-2 p-2 lg:top-auto lg:bottom-[130px] lg:-right-20">
                <FaRegHeart className="text-2xl" />
              </div>
            </div>
          </div>

          {/* recommended product large view */}
          <div className="py-10 show-lg flex-1">
            <RecommendedProducts
              text={"You may also like"}
              data={recommendedProduct}
            />
          </div>
        </div>

        {/* description */}
        <div className="bg-white p-5 rounded-lg">
          <p className="semi-bold-3xl-text text-primary py-6">Description</p>
          <p className="text-primary text-lg custom-clamp">{description}</p>
          <p className="flex justify-center">
            <FaAngleDown className="text-2xl" />
          </p>
        </div>

        {/* recommended product mobile view */}
        <div className="py-10 show-sm">
          <RecommendedProducts
            text={"You may also like"}
            data={recommendedProduct}
          />
        </div>

        {/* related product */}
        <div className="py-10">
          <SectionTitle title={"Related Products"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProduct.map((item, index) => {
              return <ProductCard key={index} data={item} />;
            })}
          </div>
        </div>

        {/* customer review and ratings */}
        <div className="py-10 space-y-10 bg-white p-10">
          <SectionTitle
            title={"Customer Reviews & Ratings"}
            subTitle={"See what other gardeners are saying about this product"}
          />
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5 space-y-5">
            <div className="flex-1 flex flex-col items-center">
              <p className="text-[99px] text-primary">{avg_rating}</p>
              <Rating
                avg_rating={avg_rating}
                rating={rating}
                total_reviews={total_reviews}
              />
              <p className="text-primary font-semibold">
                Based on {total_reviews} reviews
              </p>
            </div>

            <div className="flex flex-col h-full gap-3 w-full flex-1">
              <div className="flex items-center gap-5">
                <p className="whitespace-nowrap">5 Star</p>
                <progress
                  className="progress progress-custom-5"
                  value={90}
                  max="100"
                ></progress>
                <p>16</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="whitespace-nowrap">4 Star</p>
                <progress
                  className="progress progress-custom-4"
                  style={{}}
                  value={40}
                  max="100"
                ></progress>
                <p>4</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="whitespace-nowrap">3 Star</p>
                <progress
                  className="progress progress-custom-3"
                  value={30}
                  max="100"
                ></progress>
                <p className="whitespace-nowrap">2</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="whitespace-nowrap">2 Star</p>
                <progress
                  className="progress progress-custom-2"
                  value={60}
                  max="100"
                ></progress>
                <p>1</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="whitespace-nowrap">1 Star</p>
                <progress
                  className="progress progress-custom-1"
                  value={10}
                  max="100"
                ></progress>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* review button */}
          <CtaButton
            icon={FaPen}
            color={"primary"}
            text={"Write a Review"}
            rounded={"lg"}
          />
        </div>

          {/* review highlight section */}
          <ReviewHighlight data={reviewHighlightData} />

        {/* review section */}
        <div className="flex flex-col items-center gap-4 py-10">
          {reviewsData.map((item) => (
            <Reviews data={item} />
          ))}
          <CtaButton text={"Load More Reviews"} color={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
