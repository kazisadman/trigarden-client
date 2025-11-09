import CategoryLink from "../components/layout/products/CategoryLink";
import SearchBar from "../components/ui/SearchBar";
import SectionTitle from "../components/ui/SectionTitle";
import BlogBanner from "../components/layout/blog/BlogBanner";
import BlogCard from "../components/layout/blog/BlogCard";

import data from "../Data/blog.json";
import CtaButton from "../components/ui/CtaButton";
import RecentBlog from "../components/layout/blog/RecentBlog";

const BlogPage = () => {
  const links = [
    {
      name: "Plant Core",
      link: "",
    },
    {
      name: "Pest Control",
      link: "",
    },
    {
      name: "DIY Gardening",
      link: "",
    },
    {
      name: "Seasonal Tips",
      link: "",
    },
    {
      name: "Sustainability",
      link: "",
    },
  ];

  return (
    <div className="py-10">
      <div className="content-container lg:flex lg:flex-row-reverse lg:gap-10">
        <div className="space-y-5 ">
          <SearchBar text={"Search Articles..."} borderColor={"primary"} />

          <CategoryLink menuList={links} />
          <RecentBlog data={data} screen={"lg"} />
        </div>
        <div className="">
          <SectionTitle
            title={"The TriGardening Journal"}
            subTitle={"Your Slogan Goes Here"}
          />

          <BlogBanner />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            {data.map((item, index) => {
              return <BlogCard key={index} data={item} />;
            })}
          </div>
          <div className="flex justify-center">
            <CtaButton
              text={"Load More Articles"}
              color={"primary"}
              rounded={"lg"}
            />
          </div>
        </div>
        <RecentBlog data={data} screen={"sm"} />
      </div>
    </div>
  );
};

export default BlogPage;
