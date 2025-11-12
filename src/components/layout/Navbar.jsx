import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/navbar-logo.png";
import {
  FaHome,
  FaPhoneAlt,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import Sidebar from "./Sidebar";
import CtaButton from "../ui/CtaButton";
import SearchBar from "../ui/SearchBar";
const Navbar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const navLink = [
    {
      name: "Home",
      link: "",
      icon: <FaHome />,
    },
    {
      name: "Product",
      link: "product/home",
      icon: <FaBox />,
    },
    {
      name: "Blog",
      link: "blog",
      icon: <MdWeb />,
    },
    {
      name: "Plant Clinic",
      link: "plant-clinic",
      icon: <RiPlantFill />,
    },
  ];
  return (
    <>
      <nav className="w-full bg-primary h-[91px] text-white">
        <div className="content-container h-full mx-auto flex flex-col justify-center">
          <div className="flex justify-between items-center gap-10">
            {/* Hamburger Menu Icon */}
            <div
              onClick={() => setSidebarToggle(!sidebarToggle)}
              className="mobile-nav-icon show-sm"
            >
              <HiMenuAlt2 />
            </div>
            {/* Logo */}
            <div className="md:mr-5 xl:mr-0">
              <Link className="flex items-center" to={"/"}>
                <img src={logo} alt="" />
                <span className="text-2xl font-semibold">TriGarden</span>
              </Link>
            </div>
            {/* Nav Link */}
            <div className="show-lg">
              <ul className="flex justify-between gap-20">
                {navLink.map((item, index) => {
                  return (
                    <NavLink to={`/${item.link}`} key={index}>
                      <span className="text-xl text-white whitespace-nowrap">
                        {item.name}
                      </span>
                    </NavLink>
                  );
                })}
              </ul>
            </div>
            {/* Call button */}
            <CtaButton
              text={"Call Now"}
              icon={FaPhoneAlt}
              screen={"lg"}
              color={"complementary"}
            />
            {/* Search bar */}
            <SearchBar text={"Search Item"} show={'lg'} placeholderColor={'white'}/>
            {/* User & cart Icon */}
            <div className="mobile-nav-icon flex items-center gap-4">
              <FaShoppingCart />
              <FaUser />
            </div>
          </div>
        </div>
      </nav>
      {/* Hamburger Menu for Mobile View */}
      {sidebarToggle && (
        <Sidebar
          navLink={navLink}
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      )}
    </>
  );
};

export default Navbar;
