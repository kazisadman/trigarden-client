import { useParams } from "react-router-dom";
import data from "../Data/blog.json";
import CommentBox from "../components/layout/blog/CommentBox";
import Comments from "../components/layout/blog/Comments";
import commentData from "../Data/comment.json";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogData = data.find((item) => item.id === id);
  const { img_link, post_type, title, description, date, read_time } = blogData;
  return (
    <div className="space-y-10">
      <div className="bg-white p-3 rounded-lg">
        <div>
          <img src={img_link} alt="" />
          <div className="flex justify-between items-center py-5">
            <p className="text-primary font-semibold">{post_type}</p>
            <div className="flex items-center gap-5">
              <p>{read_time}</p>
              <p>{date}</p>
            </div>
          </div>
          <h1 className="semi-bold-3xl-text">{title}</h1>
          <p className="py-10">{description}</p>
        </div>
      </div>
      <div className="bg-white p-5 rounded-xl">
        <CommentBox />
        <div>
          {commentData.map((item, index) => {
            return <Comments key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
