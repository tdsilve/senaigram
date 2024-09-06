"use client";
import React from "react";
import { USERS } from "../dummyData/data";
import { StoriesAvatarScroller } from "./StoriesAvatarScroller";
import { StoriesModal } from "./modal/StoriesModal";
import { StoriesContext } from "../context/StoriesContext";
import { storiesReducer } from "../reducers/storiesReducer";
import { getInitialStoriesContextState } from "../helpers/getInitialStoriesContextState";
import { StoriesModalContext } from "../context/StoriesModalContext";
import { getInitialStoriesModalContextState } from "../helpers/getInitialStoriesModalContextState";
import { useStoriesModal } from "../hook/useStoriesModal";

export const Stories = () => {
  const [state, dispatch] = React.useReducer(
    storiesReducer,
    getInitialStoriesContextState(),
  );
  const { stories, setStories, setCurrentContentStory, startStoriesModalTransition } =
    useStoriesModal(USERS);
  return (

    <StoriesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <StoriesModalContext.Provider
        value={{ stories, setStories, setCurrentContentStory, startStoriesModalTransition }}
      >
        <StoriesAvatarScroller data={USERS} />

        <StoriesModal data={USERS} />
      </StoriesModalContext.Provider >


    </StoriesContext.Provider>

  );
};
