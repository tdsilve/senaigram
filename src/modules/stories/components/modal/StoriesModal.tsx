import { Dialog } from "@mui/material";
import React from "react";
import { useStoriesContext } from "../../context/StoriesContext";
import { toggleStoryModal } from "../../helpers/toggleStoryModal";
import { StoryAvatar } from "../StoryAvatar";
import { RiPlayFill } from "react-icons/ri";
import { StoriesModalHeader } from "./StoriesModalHeader";
import { USERS } from "../../dummyData/data";
import { useStoriesModal } from "../../hook/useStoriesModal";

export const StoriesModal = () => {
  const { dispatch, modal } = useStoriesContext();
  const { content } = useStoriesModal(USERS, modal.userId);

  const handleModal = () => {
    toggleStoryModal(dispatch, modal);
  };
  console.log("hey modal", content);

  return (
    <Dialog open={modal.status} fullScreen>
      <div className="w-screen h-screen overflow-hidden bg-black/90">
        <StoriesModalHeader onClick={handleModal} />
        <div className="grid place-items-center w-full h-full">
          <div className="flex items-center justify-between">
            <StoryAvatar
              userName={modal.userName}
              avatar={modal.avatar}
              className="text-white grid-flow-col gap-3"
              userNameWidth="w-40"
            />
            <button className="text-white text-2xl">
              <RiPlayFill />
            </button>
          </div>
          {/* stories */}
          <div className="w-[300px] h-full">
            <img alt="" src={content} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};
