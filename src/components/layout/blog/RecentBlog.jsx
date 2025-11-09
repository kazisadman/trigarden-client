
const RecentBlog = ({ data,screen }) => {
  return (
    <div className={`py-10 show-${screen}`}>
      <p className="semi-bold-3xl-text">Recent Post</p>
      {data.map((item, index) => {
        return (
          <div key={index} className="py-2">
            <div className="flex items-center gap-3">
              <img src={item.blog_icon} alt="" />
              <div>
                <p className="text-lg">{item.title}</p>
                <p className="text-base text-gray-400">{item.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentBlog;
