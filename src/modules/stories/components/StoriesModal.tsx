import React from "react";
import { Dialog } from "@mui/material";
import { useStoriesContext } from "../context/StoriesContext";
import { toggleModal } from "../services/toggleModal";

export const StoriesModal = () => {
  const {modal,dispatch} = useStoriesContext();
  console.log(modal.status)
  const {userId, userName} = modal;
  const handleClick = () => {
    toggleModal(dispatch, {userId, userName});
  }
  return <Dialog open={modal.status} fullWidth>
    hey {userName}
    <button onClick={handleClick}>Close</button>
  </Dialog>;
};
