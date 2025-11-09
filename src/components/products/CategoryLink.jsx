import { NavLink } from "react-router-dom";

const CategoryLink = ({ menuList }) => {
  return (
    <>
      {menuList.map((link, index) => {
        return (
          <NavLink
            to={`/product${link.link}`}
            className="border-2 border-primary lg:border-none text-lg p-2 rounded-full hover:bg-primary hover:text-white cursor-pointer"
            key={index}
          >
            {link.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default CategoryLink;
