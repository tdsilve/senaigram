import { Dialog } from "@mui/material";
import React from "react";
import { useStoriesContext } from "../context/StoriesContext";
import { toggleStoryModal } from "../helpers/toggleStoryModal";
import { StoryAvatar } from "./StoryAvatar";

export const StoriesModal = () => {
  const { dispatch, modal } = useStoriesContext();
  const { userId, userName, avatar } = modal;
  const handleModal = () => {
    toggleStoryModal(dispatch, { userId, userName });
  };
  return (
    <div>
      <Dialog open={modal.status}>
        <button onClick={handleModal}>Close</button>
        <StoryAvatar userName={userName} avatar={avatar} />
      </Dialog>
    </div>
  );
};
