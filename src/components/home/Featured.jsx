import SectionTitle from "../ui/SectionTitle";

import ProductCardCarousal from "../ui/product card carousal/ProductCarCarousal";
import data from '../../Data/product.json'
const Featured = () => {
  return (
    <div className="relative content-container">
      <SectionTitle title={"Featured Product"} />
      <ProductCardCarousal data={data}/>
    </div>
  );
};

export default Featured;
