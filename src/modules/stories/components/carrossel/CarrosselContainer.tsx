import React from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { StoriesArrowButton } from "../StoriesArrowButton";
import { useStoriesContext } from "../../context/StoriesContext";
import {
  hasRemainStories,
  findAndGetCurrentUserIndex,
  findAndGetCurrentStoryIndex,
} from "../../helpers/story-modal-swiper";
import { useStoriesModalContext } from "../../context/StoriesModalContext";

type CarrosselContainerProps = {
  children: React.ReactNode;
};
export const CarrosselContainer = ({ children }: CarrosselContainerProps) => {
  const [swiper, setSwiper] = React.useState<SwiperClass>();
  const { modal } = useStoriesContext();
  const { stories } = useStoriesModalContext();

  const changeActiveIndex = (index: number) => {
    if (swiper) {
      swiper.slideTo(index, 1);
    }
  };

  const handleChangeSlide = () => {
    const { currentStoryIndex } = findAndGetCurrentStoryIndex(stories);
    console.log(hasRemainStories(stories, currentStoryIndex));
  };

  React.useEffect(() => {
    const { currentUserIndex } = findAndGetCurrentUserIndex(
      stories,
      modal.userId,
    );
    changeActiveIndex(currentUserIndex);
  }, [modal.userId, swiper]);

  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={80}
        simulateTouch={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.1,
          slideShadows: false,
        }}
        keyboard={false}
        navigation={false /* arrows are custom */}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        modules={[EffectCoverflow]}
      >
        {children}
      </Swiper>
      <StoriesArrowButton
        onClick={() => {
          swiper?.slidePrev();
          handleChangeSlide();
        }}
        isLeft={true}
        className=" !left-1/3  z-10"
      />

      <StoriesArrowButton
        onClick={() => {
          swiper?.slideNext();
          handleChangeSlide();
        }}
        isLeft={false}
        className=" !right-1/3  z-10"
      />
    </div>
  );
};
