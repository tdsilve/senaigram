import { Users } from "../../dummyData/data";
import { cx } from "@/lib/css";
import React from "react";

import { CarrosselContainer } from "./CarrosselContainer";

import { StoriesArrowButton } from "../StoriesArrowButton";

import { SwiperSlide } from "swiper/react";

import { useStoriesCarrossel } from "../../hook/useStoriesCarrossel";
import { useStoriesContext } from "../../context/StoriesContext";
import Image from "next/image";

type CarrosselProps = {
  items: Users[];
};

export const Carrossel = ({ items }: CarrosselProps) => {
  const { modal, dispatch } = useStoriesContext();
  const {
    handleChangeSlide,
    track,
    setSwiperRef,
    currentIndexUser,
    isMobileView,
  } = useStoriesCarrossel(items, dispatch, modal);

  return (
    <CarrosselContainer onSwiper={setSwiperRef} isMobileView={isMobileView}>
      <StoriesArrowButton
        onClick={() => handleChangeSlide(true)}
        isLeft
        className="!left-3"
      />

      {track?.map((item, index) => (
        <SwiperSlide key={item.id}>
          <div
            className={cx(
              " overflow-hidden transition-all bg-black h-[500px] w-full relative z-30",
              !isMobileView && currentIndexUser === index
                ? " h-[600px] top-1/2 -translate-y-1/2 "
                : " h-[490px] top-1/2 -translate-y-1/2",
              !isMobileView ? "rounded-xl" : "",
            )}
          >
            <Image
              alt=""
              src={item?.stories[item.storyIndex]?.content ?? ""}
              className="block w-full h-full object-cover"
              draggable={false}
              fill
              priority
            />
          </div>
        </SwiperSlide>
      ))}

      <StoriesArrowButton
        onClick={() => handleChangeSlide(false)}
        className="!right-3"
      />
    </CarrosselContainer>
  );
};
