import { Users } from "../../dummyData/data";
import { StoriesArrowButton } from "../StoriesArrowButton";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import { useStoriesContext } from "../../context/StoriesContext";
import { useStoriesCarrossel } from "../../hook/useStoriesCarrossel";

type CarrosselProps = {
  items: Users[];
};

export const Carrossel = ({ items }: CarrosselProps) => {
  const { modal, dispatch } = useStoriesContext();
  const { handleChangeSlide,
    track, setSwiperRef } = useStoriesCarrossel(items, dispatch, modal);

  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={100}
        simulateTouch={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1.5,
          slideShadows: false,
        }}
        keyboard={false}
        navigation={false /* arrows are custom */}
        onSwiper={(swiper) => {
          setSwiperRef(swiper);
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        <StoriesArrowButton
          onClick={() => {
            handleChangeSlide(true);
          }}
          isLeft
          className="!left-1/3"
        />
        {track?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[500px] h-[90vh] mx-auto rounded-xl overflow-hidden border  bg-black relative">
              <img
                alt=""
                src={item?.stories[item.storyIndex]?.content ?? ""}
                className="max-w-full !object-cover"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
        <StoriesArrowButton
          onClick={() => {
            handleChangeSlide();
          }}
          className="!right-1/3"
        />
      </Swiper>
    </div>
  );
};
