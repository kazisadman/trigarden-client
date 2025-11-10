import BlogBanner from "../components/layout/blog/BlogBanner";
import BlogCard from "../components/layout/blog/BlogCard";

import data from "../Data/blog.json";
import CtaButton from "../components/ui/CtaButton";
import SectionTitle from "../components/ui/SectionTitle";

const BlogPage = () => {
  return (
    <div>
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
  );
};

export default BlogPage;
