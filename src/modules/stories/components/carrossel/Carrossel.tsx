import { Users } from "../../dummyData/data";
import { StoriesArrowButton } from "../StoriesArrowButton";
import React from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import { useStoriesContext } from "../../context/StoriesContext";
import {
  getCurrentUserIndex,
  isIndexFound,
} from "../../helpers/stories-carrossel";
import { useImmer } from "use-immer";
import { toggleStoryModal } from "../../helpers/toggleStoryModal";

type CarrosselProps = {
  items: Users[];
};

type TrackItem = {
  id: number;
  authorId: number;
  stories: any[];
  storyIndex: number;
  index: number;
};

export const Carrossel = ({ items }: CarrosselProps) => {
  const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();
  const getInitialTrack = React.useMemo(
    () =>
      items.map(({ id, stories, authorId }, index) => ({
        id,
        authorId,
        stories,
        storyIndex: 0,
        index,
      })),
    [items],
  );
  const [track, setTrack] = useImmer<TrackItem[]>(getInitialTrack);
  const { modal, dispatch } = useStoriesContext();

  React.useEffect(() => {
    const indexUser = getCurrentUserIndex(modal.userId, items);
    if (!isIndexFound(indexUser)) {
      toggleStoryModal(dispatch, modal);
      return;
    }
    swiperRef?.slideTo(indexUser, 0);
  }, [swiperRef, dispatch, items, modal]);

  const handleChangeSlide = (isPrev: boolean = false) => {
    const currentIndex = swiperRef?.realIndex!;
    const currentTrackItem = track[currentIndex];
    const noRemainData = isPrev
      ? currentTrackItem.storyIndex === 0 && currentIndex === 0
      : track[swiperRef?.realIndex!].storyIndex ===
          track[swiperRef?.realIndex!].stories.length - 1 &&
        swiperRef?.realIndex! === track.length - 1;
    const hasRemainStories = isPrev
      ? currentTrackItem.storyIndex > 0
      : track[swiperRef?.realIndex!].storyIndex <
        track[swiperRef?.realIndex!].stories.length - 1;

    if (isPrev) {
      if (noRemainData) {
        toggleStoryModal(dispatch, modal);
        return;
      }

      if (hasRemainStories) {
        setTrack((state) => {
          state[swiperRef?.realIndex!].storyIndex =
            state[swiperRef?.realIndex!].storyIndex - 1;
        });
      } else {
        swiperRef?.slidePrev();
      }
    } else {
      if (noRemainData) {
        toggleStoryModal(dispatch, modal);
        return;
      }
      if (hasRemainStories) {
        setTrack((state) => {
          state[swiperRef?.realIndex!].storyIndex =
            state[swiperRef?.realIndex!].storyIndex + 1;
        });
      } else {
        swiperRef?.slideNext();
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
          className="!left-1/3"
        />
        {track?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[500px] h-[500px] mx-auto rounded-xl overflow-hidden border  bg-black relative">
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
