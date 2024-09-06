"use client";
import React from "react";
import { StoriesUserAvatarContainer } from "./story-user-avatar/StoriesUserAvatarContainer";
import { storiesReducer } from "../reducer";
import { getStoriesInitialState } from "../helpers/getStoriesInitialState";
import { StoriesContext } from "../context/StoriesContext";
import { StoriesModal } from "./story-modal/StoriesModal";

export const Stories = () => {
  const [state, dispatch] = React.useReducer(
    storiesReducer,
    getStoriesInitialState(),
  );

  const initialState = {
    ...state,
    dispatch,
  };
  return (
    <StoriesContext.Provider value={initialState}>
      <StoriesUserAvatarContainer />
      <StoriesModal />
    </StoriesContext.Provider>
  );
};
