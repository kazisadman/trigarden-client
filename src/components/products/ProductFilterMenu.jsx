import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import CtaButton from "../ui/CtaButton";
import CheckList from "../ui/CheckList";

const ProductFilterMenu = ({
  categoryCheckList,
  sizeCheckList,
  lightCheckList,
}) => {
  const [price, setPrice] = useState(40);

  return (
    <div>
      <div className="flex justify-between items-center">
        <CtaButton
          id={"my_modal_3"}
          text={"Filter"}
          color={"primary"}
          rounded={"lg"}
          icon={FaFilter}
        />

        {/* Sorting Menu */}
        <select className="border-2 border-primary p-3" name="SortBy" id="">
          <option value="Popularity">Popularity</option>
        </select>
      </div>
      {/* Filter Menu */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form>
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

            <div className="flex justify-end">
              <CtaButton
                color={"primary"}
                text={"Apply Filter"}
                rounded={"lg"}
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProductFilterMenu;
