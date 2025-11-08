import { AiFillMedicineBox } from "react-icons/ai";
import SectionTitle from "../../ui/SectionTitle";
import { RiPlantFill } from "react-icons/ri";
import { TbToolsKitchen } from "react-icons/tb";
import { GiFertilizerBag } from "react-icons/gi";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const data = [
    {
      id: 1,
      icon: RiPlantFill,
      title: "Plants",
      subTitle: "Indoor  & Outdoor Plants for every space",
    },
    {
      id: 1,
      icon: AiFillMedicineBox,
      title: "Medicine",
      subTitle: "Natural Plant Care Solutions",
    },
    {
      id: 1,
      icon: TbToolsKitchen,
      title: "Equipment",
      subTitle: "Professional Gardening tools",
    },
    {
      id: 1,
      icon: GiFertilizerBag,
      title: "Fertilizers",
      subTitle: "Safe & effective plant protection",
    },
  ];
  return (
    <div className="content-container">
      <SectionTitle title={"Shop By Categories"} />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-3">
        {data.map((item) => {
          return (
            <CategoryCard
              key={item.id}
              Icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
