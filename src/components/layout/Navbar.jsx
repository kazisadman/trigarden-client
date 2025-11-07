import { NavLink } from "react-router-dom";
import logo from "../../assets/navbar-logo.png";
import menuIcon from "../../assets/menu.svg";
import userIcon from "../../assets/User_Icon.svg";
const Navbar = () => {
  const navLink = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Product",
      link: "product",
    },
    {
      name: "Blog",
      link: "blog",
    },
    {
      name: "Plant Clinic",
      link: "plant-clinic",
    },
  ];
  return (
    <div className="bg-primary w-full h-[91px] text-white flex flex-col justify-center">
      <div className="flex justify-between items-center w-[min(90%,1680px)] mx-auto px">
        <div>
          <img className="mobile-nav-icon" src={menuIcon} alt="" />
        </div>
        <div>
          <a className="flex items-center" href="/">
            <img src={logo} alt="" />
            <span className="text-2xl">TriGarden</span>
          </a>
        </div>
        <div>
          <img className="mobile-nav-icon" src={userIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
