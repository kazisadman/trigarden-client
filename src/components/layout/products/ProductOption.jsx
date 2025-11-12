const ProductOption = ({ data, title, selectedSize, setSelectedSize }) => {
  return (
    <div className="py-5">
      <p className="semi-bold-2xl-text">{title}</p>

      <div className="flex justify-between items-center flex-wrap gap-2">
        {data.map((item, index) => {
          return (
            <button
              onClick={() => setSelectedSize(item.size)}
              key={index}
              className={`text-lg text-center  p-4 rounded-2xl cursor-pointer relative ${
                item.size === selectedSize
                  ? "border-4 border-primary"
                  : "border-2 border-gray-500"
              }`}
            >
              <p className="font-semibold">{item.size}</p>
              <p>$ {item.price}</p>
              <div
                className={`w-full h-full absolute bg-primary top-0 left-0 rounded-2xl right-0 opacity-10 z-10 
                ${item.size === selectedSize ? "block" : "hidden"}`}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOption;
