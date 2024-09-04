import { Dialog } from "@mui/material";
import React from "react";
import { useStoriesContext } from "../../context/StoriesContext";
import { toggleStoryModal } from "../../helpers/toggleStoryModal";
import { StoryAvatar } from "../StoryAvatar";
import { RiPlayFill } from "react-icons/ri";
import { StoriesModalHeader } from "./StoriesModalHeader";
import { useStoriesModal } from "../../hook/useStoriesModal";

export const StoriesModal = () => {
  const { dispatch, modal } = useStoriesContext();
  const { userId, userName, avatar } = modal;
  const handleModal = () => {
    toggleStoryModal(dispatch, { userId, userName, avatar });
  };
  const { initialStories } = useStoriesModal();
  return (
    <Dialog open={modal.status} fullScreen>
      <div className="w-full h-full bg-black/90">
        <StoriesModalHeader onClick={handleModal} />
        <div className="grid place-items-center w-full h-full">
          <div className="flex items-center justify-between">
            <StoryAvatar
              userName={userName}
              avatar={avatar}
              className="text-white grid-flow-col gap-3"
              userNameWidth="w-40"
            />
            <button className="text-white text-2xl">
              <RiPlayFill />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
