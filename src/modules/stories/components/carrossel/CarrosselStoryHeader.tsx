import React from "react";
import { StoryAvatar } from "../StoryAvatar";
import { CarrosselStoriesHeaderPagination } from "./CarrosselStoriesHeaderPagination";

type CarrosselStoryHeaderProps = {
  avatar?: string;
  userName: string;
  storiesLength: number;
  currentStoryIndex: number;
  isCurrentUser: boolean;
};

export const CarrosselStoryHeader = ({
  avatar,
  userName,
  storiesLength,
  currentStoryIndex,
  isCurrentUser
}: CarrosselStoryHeaderProps) => {
  return (
    <div className="text-white absolute z-30 p-4 w-full">
      <CarrosselStoriesHeaderPagination
        quantity={storiesLength}
        currentIndex={currentStoryIndex}
        isCurrentUser={isCurrentUser}
      />
      <StoryAvatar
        avatar={avatar}
        userName={userName}
        className="grid-flow-col gap-2"
        userNameWidth="w-22"
      />
    </div>
  );
};
