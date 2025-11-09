import { NavLink } from "react-router-dom";

const CategoryLink = ({ menuList }) => {
  return (
    <div className="lg:bg-secondary p-5">
      <p className="hidden lg:block semi-bold-2xl-text">Blog Category</p>
      <ul
        id="category-link"
        className="flex justify-center lg:justify-normal lg:flex-col flex-wrap lg:rounded-xl gap-3"
      >
        {menuList.map((link, index) => {
          return (
            <NavLink
              to={`/${link.link}`}
              className="border-2 border-primary lg:border-none text-lg p-2 rounded-full hover:bg-primary hover:text-white cursor-pointer"
              key={index}
            >
              {link.name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryLink;
