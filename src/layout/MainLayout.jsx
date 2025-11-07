import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] w-full mx-auto font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
