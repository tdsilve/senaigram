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
  const { setStories, setCurrentContentStory } = useStoriesModalContext();
  const handleClick = () => {
    const { currentStories, currentContent } = getModalStoriesAndContent(
      USERS,
      modal.userId,
    );
    // setStories((state) => {
    //   state.content = currentContent
    // })
    setCurrentContentStory(modal);

    toggleStoryModal(dispatch, { userId, userName, avatar });
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <StoryAvatar userName={userName} avatar={avatar} />
    </div>
  );
};
