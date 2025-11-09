import { useState } from "react";
import CtaButton from "../ui/CtaButton";
import CheckList from "../ui/CheckList";

const ProductFilterMenu = ({
  categoryCheckList,
  sizeCheckList,
  lightCheckList,
}) => {
  const [price, setPrice] = useState(40);

  return (
    <div className="p-10">
      <h3 className="font-bold text-2xl">Filter Products</h3>

      {/* Category List*/}
      <CheckList checkList={categoryCheckList} />

      {/* Price Range */}
      <div className="py-5">
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          className="range"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <div className="flex justify-between text-lg">
          <span>$0</span>
          <span>$1000+</span>
        </div>
      </div>

      {/* size */}
      <CheckList checkList={sizeCheckList} />

      {/* Light checklist */}
      <CheckList checkList={lightCheckList} />

      <div className="text-center">
        <CtaButton color={"primary"} text={"Apply Filter"} rounded={"lg"} width={"full"} />
      </div>
    </div>
  );
};

export default ProductFilterMenu;
