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
  const { handleChangeSlide, track, setSwiperRef } = useStoriesCarrossel(
    items,
    dispatch,
    modal,
  );

  return (
    <div className="relative mx-auto">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={10}
        simulateTouch={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1.5,
          slideShadows: false,
        }}
        keyboard={false}
        navigation={false }
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
          className="!left-3"
        />
        {track?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[370px] h-[90vh] max-h-[600px] rounded-xl overflow-hidden border  bg-black">
              <img
                alt=""
                src={item?.stories[item.storyIndex]?.content ?? ""}
                className="max-w-full object-cover"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
        <StoriesArrowButton
          onClick={() => {
            handleChangeSlide();
          }}
          className="!right-3"
        />
      </Swiper> 
    </div>
  );
};
