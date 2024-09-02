import React from "react";
import { Dialog } from "@mui/material";
import { useStoriesContext } from "../../context/StoriesContext";
import { toggleModal } from "../../services/toggleModal";
import { StoryUserAvatar } from "../story-user-avatar/StoryUserAvatar";
import { USERS } from "../../aux/users";
import { RiPauseFill, RiCloseFill } from "react-icons/ri";
import { StoryContent } from "./StoryContent";
import { StoriesHover } from "./StoriesHover";

export const StoriesModal = () => {
  const { modal, dispatch } = useStoriesContext();

  const { userId, userName } = modal;
  const handleModal = () => {
    toggleModal(dispatch, { userId, userName });
  };

  return (
    <Dialog open={modal.status} fullWidth>
      <div className="relative">
        <StoriesHover>
          <div className="absolute top-0 w-full">
            <StoryContent
              handleClick={handleModal}
              userId={userId}
              userName={userName}
            />
          </div>
        </StoriesHover>
      </div>
    </Dialog>
  );
};
