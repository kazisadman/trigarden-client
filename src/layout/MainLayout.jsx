import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto font-poppins overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
