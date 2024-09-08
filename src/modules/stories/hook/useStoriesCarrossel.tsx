import React from "react";
import { SwiperClass } from "swiper/react";
import { TrackItem } from "../models/type";
import { Users } from "../dummyData/data";
import { useImmer } from "use-immer";
import { StoriesAction, StoriesActionPayload } from "../models/type";
import {
  getCurrentUserIndex,
  isIndexFound,
} from "../helpers/stories-carrossel";
import { toggleStoryModal } from "../helpers/toggleStoryModal";

export const useStoriesCarrossel = (
  items: Users[],
  dispatch: React.Dispatch<StoriesAction>,
  modal: StoriesActionPayload,
) => {
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
  const [currentIndexUser, setCurrentIndexUser] = React.useState(0);

  React.useEffect(() => {
    const indexUser = getCurrentUserIndex(modal.userId, items);
    if (!isIndexFound(indexUser)) {
      toggleStoryModal(dispatch, modal);
      return;
    }
    swiperRef?.slideTo(indexUser, 0);
    setCurrentIndexUser(indexUser);
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
        setCurrentIndexUser(swiperRef?.realIndex!);
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
        setCurrentIndexUser(swiperRef?.realIndex!);
      }
    }
  };

  return {
    handleChangeSlide,
    track,
    setSwiperRef,
    currentIndexUser,
  };
};
