import Categories from "../components/home/categories/Categories";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import PlantClinic from "../components/home/PlantClinic";
import Popular from "../components/home/Popular";

const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Categories />
      <Featured/>
      <Popular/>
      <PlantClinic/>
    </div>
  );
};

export default Homepage;
