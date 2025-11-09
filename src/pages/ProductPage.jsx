import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/ui/BreadCrumb";
import ProductFilterMenu from "../components/products/ProductFilterMenu";
import ProductMenu from "../components/products/ProductMenu";

const ProductPage = () => {
  const links = [
    "Home",
    "Plants",
    "Tools",
    "Fertilizers",
    "Seeds",
    "Medicine",
    "Equipments",
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


  return (
    <>
      <div>
        <div className="content-container">
          <ul className="flex justify-center flex-wrap gap-5">
            <ProductMenu menuList={links}/>
          </ul>
          <div>
            <BreadCrumb location={location} />
          </div>
          <ProductFilterMenu
            categoryCheckList={categoryCheckList}
            sizeCheckList={sizeCheckList}
            lightCheckList={lightCheckList}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
