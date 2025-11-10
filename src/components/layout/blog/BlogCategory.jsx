import { Link} from "react-router-dom";

const BlogCategory = ({menuList}) => {
    return (
      <div className="lg:bg-white p-5 lg:rounded-xl">
        <p className="semi-bold-2xl-text show-lg">Blog Category</p>
        <div
          className="flex lg:flex-col justify-center lg:justify-start flex-wrap gap-5"
        >
          {menuList.map((link, index) => {
            return (
              <Link
                to={`/${link.link}`}
                className="border-2 border-primary lg:border-none text-lg p-2 lg:p-0 rounded-full hover:bg-primary hover:text-white cursor-pointer"
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default BlogCategory;