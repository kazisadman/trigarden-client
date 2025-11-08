import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";

export default function ProductCardCarousal({ data }) {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        breakpoints={{
            0:{
                slidesPerView:1
            },
            640:{
                slidesPerView:2
            },
            1024:{
                slidesPerView:4
            }
        }}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide>
              <ProductCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
