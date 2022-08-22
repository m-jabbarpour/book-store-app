import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperLg() {
  return (
    <div className="container mx-auto px-12 mt-8 bg-neutral-100">
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="shadow-lg"
      >
        <SwiperSlide className="swiper-slide-lg rounded-lg overflow-hidden">
          <img src="https://newcdn.fidibo.com/img/Slides/nd-literature-lg.jpg" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-lg rounded-lg overflow-hidden">
          <img src="https://newcdn.fidibo.com/img/Slides/nd-self-improvement-lg.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
