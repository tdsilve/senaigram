import { Dialog } from "@mui/material";
import React from "react";
import { useStoriesContext } from "../../context/StoriesContext";
import { toggleStoryModal } from "../../helpers/toggleStoryModal";

import { StoriesModalHeader } from "./StoriesModalHeader";

import { Carrossel } from "../carrossel/Carrossel";
import { Users } from "../../dummyData/data";

type StoriesModalProps = {
  data: Users[];
};

export const StoriesModal = ({ data }: StoriesModalProps) => {
  const { dispatch, modal } = useStoriesContext();
  const handleModal = () => {
    toggleStoryModal(dispatch, modal);
  };

  return (
    <Dialog open={modal.status} fullScreen>
      <div className="w-screen min-h-screen overflow-hidden bg-black/90 p-4">
        <div className="w-full">
          <StoriesModalHeader onClick={handleModal} />
        </div>
        <Carrossel items={data} />
      </div>
    </Dialog>
  );
};
