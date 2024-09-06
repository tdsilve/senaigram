import { Dialog } from "@mui/material";
import React from "react";
import { useStoriesContext } from "../../context/StoriesContext";
import { toggleStoryModal } from "../../helpers/toggleStoryModal";
import { StoryAvatar } from "../StoryAvatar";
import { RiPlayFill } from "react-icons/ri";
import { StoriesModalHeader } from "./StoriesModalHeader";

import { useStoriesModalContext } from "../../context/StoriesModalContext";

export const StoriesModal = () => {
  const { dispatch, modal } = useStoriesContext();
  const { stories, startStoriesModalTransition } = useStoriesModalContext();
  const handleModal = () => {
    toggleStoryModal(dispatch, modal);
  };

  const handleOnLoad = () => {
    // setTimeout(() => {
    //   startStoriesModalTransition({ modal, dispatch });
    // }, 1000);
  };

  return (
    <Dialog open={modal.status} fullScreen>
      <div className="w-screen h-screen overflow-hidden bg-black/90 relative p-4">
        <div className="absolute top-0 w-screen">
          <StoriesModalHeader onClick={handleModal} />
        </div>

        {/* todo */}
        <div className="w-[500px] h-full relative mx-auto rounded-2xl">
          <div className="flex items-center justify-between relative z-30 p-4">
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
          <div className="w-full h-full absolute top-0">
            <img
              alt=""
              src={stories.currentStory?.content ?? ""}
              onLoad={handleOnLoad}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};
