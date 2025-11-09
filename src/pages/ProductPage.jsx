import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/ui/BreadCrumb";
import ProductFilterMenu from "../components/products/ProductFilterMenu";
import CategoryLink from "../components/products/CategoryLink";
import data from "../Data/product.json";
import ProductCard from "../components/ui/ProductCard";
import { FaFilter } from "react-icons/fa";
import CtaButton from "../components/ui/CtaButton";

const ProductPage = () => {
  const links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Plants",
      link: "/plants",
    },
    {
      name: "Tools",
      link: "/tools",
    },
    {
      name: "Fertilizers",
      link: "/fertilizers",
    },
    {
      name: "Seeds",
      link: "/seeds",
    },
    {
      name: "Medicine",
      link: "/medicine",
    },
    {
      name: "Equipments",
      link: "/equipments",
    },
  ];

  const categoryCheckList = {
    title: "Category",
    list: [
      {
        name: "Indoor Plants",
        number: 32,
      },
      {
        name: "Outdoor Plants",
        number: 32,
      },
    ],
  };

  const sizeCheckList = {
    title: "Size",
    list: [
      {
        name: "Small",
        number: 20,
      },
      {
        name: "Medium",
        number: 27,
      },
      {
        name: "Large",
        number: 16,
      },
    ],
  };

  const lightCheckList = {
    title: "Light Requirements",
    list: [
      {
        name: "Low Light",
        number: 20,
      },
      {
        name: "Medium Light",
        number: 27,
      },
      {
        name: "Bright Light",
        number: 16,
      },
    ],
  };

  const location = useLocation();
  const pathName = location.pathname.split("/").filter(Boolean);
  const pageName = pathName[pathName.length - 1];

  return (
    <>
      <div className="bg-secondary">
        <div className="product-page-container">
          <ul
            id="category-link"
            className="flex justify-center lg:justify-normal flex-wrap gap-5"
          >
            <CategoryLink menuList={links} />
          </ul>
          <div>
            <BreadCrumb location={location} />
          </div>
          <div className="flex justify-between items-center py-4">
            <CtaButton
              id={"my_modal_3"}
              text={"Filter"}
              color={"primary"}
              rounded={"lg"}
              icon={FaFilter}
              screen={"sm"}
            />
            <div className="show-lg">
              <p className="text-3xl font-semibold">
                {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
              </p>
              <p>Showing 10 out of 40</p>
            </div>
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
                <ProductFilterMenu
                  categoryCheckList={categoryCheckList}
                  sizeCheckList={sizeCheckList}
                  lightCheckList={lightCheckList}
                />
              </form>
            </div>
          </dialog>
          <div className="lg:flex lg:justify-between lg:gap-10">
            <div className="bg-white show-lg flex-none h-fit rounded-lg">
              <ProductFilterMenu
                categoryCheckList={categoryCheckList}
                sizeCheckList={sizeCheckList}
                lightCheckList={lightCheckList}
              />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {data.map((item, index) => {
                return <ProductCard key={index} data={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
