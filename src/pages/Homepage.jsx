import Categories from "../components/home/categories/Categories";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Popular from "../components/home/Popular";

const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Categories />
      <Featured/>
      <Popular/>
    </div>
  );
};

export default Homepage;
