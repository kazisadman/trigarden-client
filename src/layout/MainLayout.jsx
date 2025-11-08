import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto font-poppins overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
