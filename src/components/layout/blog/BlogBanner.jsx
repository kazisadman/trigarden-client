import avatar from '../../../assets/Avatar.png'
const BlogBanner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/d4H12KYV/image-3.png')] bg-cover bg-center w-full h-[300px] lg:h-[500px] text-white rounded-xl p-5 lg:p-16 flex flex-col justify-end relative">
      <div className="space-y-2 z-20">
        <p className="text-[clamp(1.8rem,2vw,2.5rem)]">
          Your Blog Title Goes Here
        </p>
        <p className="text-[clamp(1rem,2vw,1.8rem)]">
          Your Blog Post first Paragraph Sectence Goes Here
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={avatar} alt="" />
            <p>Writer Name &bull;</p>
          </div>
          <p>17 September 2025</p>
        </div>
      </div>
      <div className="absolute h-full bg-black top-0 left-0 right-0 opacity-50 rounded-xl"></div>
    </div>
  );
};

export default BlogBanner;
