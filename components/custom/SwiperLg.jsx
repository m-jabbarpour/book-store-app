import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SwiperLg() {
  return (
    <div className="container mx-auto px-12 mt-8 bg-neutral-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-lg">
          <img
            src="https://newcdn.fidibo.com/img/Slides/nd-literature-lg.jpg"
            // layout="fill"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-lg">
          <img
            src="https://newcdn.fidibo.com/img/Slides/nd-self-improvement-lg.jpg"
            // layout="fill"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
