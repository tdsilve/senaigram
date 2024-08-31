"use client";
import React from "react";
import { StoriesUserAvatarContainer } from "./story-user-avatar/StoriesUserAvatarContainer";
import { storiesReducer } from "../reducer";
import { getStoriesInitialState } from "../helpers/stories-initial-state";
import { StoriesContext } from "../context/StoriesContext";
import { Payload, StoriesContextType } from "../types/type";
import { StoriesModal } from "./StoriesModal";

export const Stories = () => {

  const [state, dispatch] = React.useReducer(
    storiesReducer,
    getStoriesInitialState()
  );

  const initialState = {
    ...state,
    dispatch
  }
  return <StoriesContext.Provider value={initialState}>
    <StoriesUserAvatarContainer />
    <StoriesModal/>
  </StoriesContext.Provider>;
};
