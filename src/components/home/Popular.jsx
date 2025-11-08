import SectionTitle from "../ui/SectionTitle";
import data from "../../Data/product.json";
import ProductCardCarousal from "../ui/product card carousal/ProductCarCarousal";

const Popular = () => {
  return (
    <div className="content-container">
      <SectionTitle
        title={"Popular Products"}
        subTitle={"Discover Our Most Popular Gardening Essentials"}
      />
      <ProductCardCarousal data={data} />
    </div>
  );
};

export default Popular;
