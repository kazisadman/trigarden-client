const RecommendedProducts = ({ text, data }) => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <p className="semi-bold-2xl-text">{text}</p>
      {data.map((item,index) => {
        const { card_img_link, title, category, price } = item;
        return (
          <div key={index} className="flex items-center gap-3 py-5">
            <img
              className="w-[71px] h-[71px] object-cover"
              src={card_img_link}
              alt="product image"
            />
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-gray-500">{category}</p>
              <p className="text-complementary font-semibold">$ {price.min}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedProducts;
