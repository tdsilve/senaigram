"use client";
import React from "react";
import { USERS } from "../dummyData/data";
import { StoriesAvatarScroller } from "./StoriesAvatarScroller";
import { StoriesModal } from "./modal/StoriesModal";
import { StoriesContext } from "../context/StoriesContext";
import { storiesReducer } from "../reducers/storiesReducer";
import { getInitialStoriesContextState } from "../helpers/getInitialStoriesContextState";

export const Stories = () => {
  const [state, dispatch] = React.useReducer(
    storiesReducer,
    getInitialStoriesContextState(),
  );

  return (
    <StoriesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <StoriesAvatarScroller data={USERS} />
      <StoriesModal />
    </StoriesContext.Provider>
  );
};
