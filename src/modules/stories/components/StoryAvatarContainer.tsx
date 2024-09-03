import React from "react";
import { useStoriesContext } from "../context/StoriesContext";
import { toggleStoryModal } from "../helpers/toggleStoryModal";
import { StoryAvatar } from "./StoryAvatar";

export const StoryAvatarContainer = ({
  avatar,
  userName,
  userId,
}: {
  avatar: string;
  userName: string;
  userId: number;
}) => {
  const { dispatch } = useStoriesContext();
  const handleClick = () => {
    toggleStoryModal(dispatch, { userId, userName, avatar });
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <StoryAvatar userName={userName} avatar={avatar} />
    </div>
  );
};
