import { Users } from "@/modules/stories/aux/users";
import React from "react";
import { StoryUserAvatar } from "./StoryUserAvatar";
import { useStoriesContext } from "../../context/StoriesContext";
import { toggleModal } from "../../services/toggleModal";

export const StoryBubble = ({ user }: { user: Users }) => {
  const { dispatch } = useStoriesContext();
  const handleClick = () => {
    toggleModal(dispatch, {
      userName: user.name,
      userId: user.id,
    });
  };
  return (
    <div
      className="cursor-pointer grid items-center gap-1"
      onClick={handleClick}
    >
      <StoryUserAvatar src={user?.avatar} />
      <div className="text-md overflow-hidden w-16 text-ellipsis">
        {user.name}
      </div>
    </div>
  );
};
