import hero_1 from "../../../assets/Hero_1.jpg";
import hero_2 from "../../../assets/Hero_2.jpg";
import hero_3 from "../../../assets/Hero_3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousal() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hero_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero_3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
