import React from "react";
import CategoryLink from "../components/layout/products/CategoryLink";
import BreadCrumb from "../components/ui/BreadCrumb";
import { Outlet, useLocation } from "react-router-dom";

const ProductMainLayout = () => {
  const links = [
    {
      name: "Home",
      link: "product/home",
    },
    {
      name: "Plants",
      link: "product/plants",
    },
    {
      name: "Tools",
      link: "product/tools",
    },
    {
      name: "Fertilizers",
      link: "product/fertilizers",
    },
    {
      name: "Seeds",
      link: "product/seeds",
    },
    {
      name: "Medicine",
      link: "product/medicine",
    },
    {
      name: "Equipments",
      link: "product/equipments",
    },
  ];
  const location = useLocation();

  return (
    <div className="bg-secondary">
      <div className="product-page-container">
        <CategoryLink menuList={links} />

        <BreadCrumb location={location} />
        <Outlet/>
      </div>
    </div>
  );
};

export default ProductMainLayout;
