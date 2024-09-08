"use client";
import React from "react";
import { Swiper, SwiperClass } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import { EffectCube, Navigation } from "swiper/modules";

type CarrosselContainerProps = {
  children: React.ReactNode;
  onSwiper: (val: SwiperClass) => void;
  isMobileView: boolean;
};

export const CarrosselContainer = ({
  children,
  onSwiper,
  isMobileView,
}: CarrosselContainerProps) => {
  if (isMobileView) {
    return (
      <Swiper
        key={"swiper-mobile"}
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 0,
          shadowScale: 0.94,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCube, Navigation]}
        onSwiper={onSwiper}
      >
        {children}
      </Swiper>
    );
  }
  return (
    <Swiper
      key={"swiper-desktop"}
      centeredSlides={true}
      breakpoints={{
        630: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      spaceBetween={30}
      simulateTouch={false}
      keyboard={false}
      navigation={false}
      onSwiper={onSwiper}
      modules={[Navigation]}
      className="w-full h-full"
      observer={true}
    >
      {children}
    </Swiper>
  );
};
