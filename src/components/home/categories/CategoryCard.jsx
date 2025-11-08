const CategoryCard = ({ Icon, title, subTitle }) => {
  return (
    <div className="bg-secondary flex justify-center items-center p-10 rounded-md w-full lg:h-[369px]">
      <div className="flex flex-col items-center text-center gap-5">
        <div className="text-[clamp(3rem,2vw+1rem,6rem)] bg-white p-5 rounded-full">
          {Icon && <Icon />}
        </div>
        <p className="text-[clamp(1.25rem,2vw+1rem,2rem)] py-2 font-semibold">
          {title}
        </p>
        <p className="text-[clamp(1rem,2vw,1.3rem)]">{subTitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
