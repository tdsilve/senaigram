import { Users } from "../../dummyData/data";
import { StoriesArrowButton } from "../StoriesArrowButton";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useStoriesContext } from "../../context/StoriesContext";
import { useStoriesCarrossel } from "../../hook/useStoriesCarrossel";
import { cx } from "@/lib/css";

type CarrosselProps = {
  items: Users[];
};

export const Carrossel = ({ items }: CarrosselProps) => {
  const { modal, dispatch } = useStoriesContext();
  const { handleChangeSlide, track, setSwiperRef, currentIndexUser } =
    useStoriesCarrossel(items, dispatch, modal);

  return (
    <div className="relative mx-auto">
      <Swiper
        centeredSlides={true}
        breakpoints={{
          630: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        simulateTouch={false}
        keyboard={false}
        navigation={false}
        onSwiper={(swiper) => {
          setSwiperRef(swiper);
        }}
        modules={[Navigation]}
        className="w-full h-full"
        observer={true}
      >
        <StoriesArrowButton
          onClick={() => {
            handleChangeSlide(true);
          }}
          isLeft
          className="!left-3"
        />
        {track?.map((item, index) => (
          <SwiperSlide key={item.id} className=" w-[60%]">
            <div
              className={cx(
                "rounded-xl overflow-hidden border transition-all translate-y-14  bg-black",
                currentIndexUser === index
                  ? "h-[600px] scaley-105 translate-y-0"
                  : "h-[500px]",
              )}
            >
              <img
                alt=""
                src={item?.stories[item.storyIndex]?.content ?? ""}
                className="block w-full h-full object-cover"
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
