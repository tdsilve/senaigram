import { USERS, Users } from "../../dummyData/data";
import { StoriesArrowButton } from "../StoriesArrowButton";
import React from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useStoriesContext } from "../../context/StoriesContext";
import {
  getCurrentUserIndex,
  isIndexFound,
} from "../../helpers/stories-carrossel";

type CarrosselProps = {
  items: Users[];
};

export const Carrossel = ({ items }: CarrosselProps) => {
  const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();

  const { modal, dispatch } = useStoriesContext();
  const [indexUser, setIndexUser] = React.useState(0);
  const [indexStory, setIndexStory] = React.useState(0);

  React.useEffect(() => {
    const indexUser = getCurrentUserIndex(modal.userId, items);
    if (!isIndexFound(indexUser)) return;
    swiperRef?.slideTo(indexUser, 0);
    setIndexUser(indexUser);
  }, [swiperRef]);

  React.useEffect(() => {
    setIndexStory(0);
  }, [swiperRef?.realIndex]);

  const handleChangeSlide = (isPrev: boolean = false) => {
    if (isPrev) {
      const hasRemainStories = indexStory > 0;
      if (hasRemainStories) {
        setIndexStory(indexStory - 1);
      } else {
        swiperRef?.slidePrev();
        setIndexStory(0);
      }
    } else {
      const hasRemainStories =
        indexStory < USERS[swiperRef?.realIndex!].stories.length - 1;
      if (hasRemainStories) {
        setIndexStory(indexStory + 1);
      } else {
        swiperRef?.slideNext();
        setIndexStory(0);
      }
    }
  };

  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={0}
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
          className="!left-0"
        />
        {items?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="w-[500px] h-full mx-auto rounded-xl overflow-hidden border  bg-black relative">
              {swiperRef?.realIndex !== index ? (
                <img
                  alt=""
                  src={item?.stories[0]?.content ?? ""}
                  className=" object-cover"
                  draggable={false}
                />
              ) : (
                <img
                  alt=""
                  src={item?.stories[indexStory]?.content ?? ""}
                  className=" object-cover"
                  draggable={false}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
        <StoriesArrowButton
          onClick={() => {
            handleChangeSlide();
          }}
        />
      </Swiper>
    </div>
  );
};
