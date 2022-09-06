import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import Image from "next/image";

export default function BannerSwiper({ category, banners }) {
  const [bannersOfSelectedCategory, setBannersOfSelectedCategory] = useState(
    []
  );

  useEffect(() => {
    setBannersOfSelectedCategory(
      banners.filter((banner) => banner.category === category)
    );
  }, [banners]);

  return (
    <section className="container pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {bannersOfSelectedCategory.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-[308px] h-[173.25px] sm:w-[384px] sm:h-[216px] lg:w-[498px] lg:h-[280.125px] shadow-[0_3px_6px_0px_#00000052] rounded-2xl overflow-hidden cursor-pointer">
              <Image src={banner.src} layout="fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
