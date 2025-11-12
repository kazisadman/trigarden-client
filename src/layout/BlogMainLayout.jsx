import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";
import RecentBlog from "../components/layout/blog/RecentBlog";
import data from "../Data/blog.json";
import BlogCategory from "../components/layout/blog/BlogCategory";

const BlogMainLayout = () => {
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
    <div className="py-10 bg-secondary">
      <div className="content-container lg:flex lg:flex-row-reverse lg:gap-10">
        <div className="space-y-5 ">
          <div className="bg-white p-5 rounded-lg">
            <SearchBar text={"Search Articles..."} borderColor={"primary"} placeholderColor={'secondary'}/>
          </div>

          <BlogCategory menuList={links} />
          <RecentBlog data={data} screen={"lg"} />
        </div>
        <div>
          <Outlet />
          <RecentBlog data={data} screen={"sm"} />
        </div>
      </div>
    </div>
  );
};

export default BlogMainLayout;
