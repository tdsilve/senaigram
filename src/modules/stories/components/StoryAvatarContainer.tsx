import React from "react";
import { useStoriesContext } from "../context/StoriesContext";
import { toggleStoryModal } from "../helpers/toggleStoryModal";
import { StoryAvatar } from "./StoryAvatar";
import { useStoriesModalContext } from "../context/StoriesModalContext";
import { getModalStoriesAndContent } from "../helpers/getModalStoriesAndContent";
import { USERS } from "../dummyData/data";

export const StoryAvatarContainer = ({
  avatar,
  userName,
  userId,
}: {
  avatar: string;
  userName: string;
  userId: number;
}) => {
  const { dispatch, modal } = useStoriesContext();
  const { setCurrentContentStory } = useStoriesModalContext();
  const handleClick = () => {
    toggleStoryModal(dispatch, { userId, userName, avatar });
    setCurrentContentStory({ userId, userName, avatar });
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <StoryAvatar userName={userName} avatar={avatar} />
    </div>
  );
};
