import React from "react";
import { Users } from "../dummyData/data";
import { StoriesArrowButton } from "./StoriesArrowButton";
import { useStoriesScroll } from "../hook/useStoriesScroll";
import { StoryAvatarContainer } from "./StoryAvatarContainer";

export const StoriesAvatarScroller = ({ data }: { data: Users[] }) => {
  const {
    containerRef,
    onScrollLeft,
    onScrollRight,
    showScrollLeft,
    showScrollRight,
  } = useStoriesScroll();

  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto p-2" ref={containerRef}>
        {data?.map((item) => (
          <StoryAvatarContainer
            key={item.id}
            userName={item.name}
            avatar={item.avatar}
            userId={item.id}
          />
        ))}
        {showScrollRight && (
          <StoriesArrowButton isLeft={false} onClick={onScrollRight} />
        )}
        {showScrollLeft && (
          <StoriesArrowButton isLeft={true} onClick={onScrollLeft} />
        )}
      </div>
    </div>
  );
};
