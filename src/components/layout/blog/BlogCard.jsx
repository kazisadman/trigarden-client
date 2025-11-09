const BlogCard = ({ data }) => {
  const { img_link, post_type, title, description, date, read_time } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[400px]" src={img_link} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-primary font-semibold">{post_type}</p>
        <h1 className="semi-bold-2xl-text">{title}</h1>
        <p className="text-xl line-clamp-3">{description}</p>
        <div className="flex justify-between py-3">
          <p>{date}</p>
          <p className="text-right">{read_time}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
