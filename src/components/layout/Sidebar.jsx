import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = ({navLink,sidebarToggle,setSidebarToggle}) => {
  return (
    <div className="w-2/5 h-screen fixed bg-primary top-0 left-0 show-sm overflow-x-scroll">
      <button
        onClick={() => setSidebarToggle(!sidebarToggle)}
        className="absolute top-5 right-5 mobile-nav-icon"
      >
        <FaX />
      </button>
      <div className="absolute top-[20%] left-5">
        <ul className="space-y-10">
          {navLink.map((item, index) => {
            return (
              <NavLink className={"flex space-x-5"} key={index}>
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="text-2xl text-white whitespace-nowrap">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
