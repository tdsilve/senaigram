import { useStoriesContext } from "../context/StoriesContext";
import React from "react";
import { getStoriesInitialState } from "../helpers/getStoriesInitialState";
import { getCurrentStoriesInitialConfig } from "../helpers/getCurrentStoriesInitialConfig";
import { storiesModalReducer } from "../reducer";
import { Users, USERS } from "../aux/users";
import { STORIES_MODAL_REDUCER_ACTIONS } from "../types/enums";
import { StoryTransitionConfig } from "../types/type";

function getInitialStories(userId: number) {
  const findIndex = USERS.findIndex((u) => u.authorId === userId);
  return USERS[findIndex].stories;
}

export const useStoriesModal = () => {
  const {
    dispatch,
    modal: { userId, userName },
  } = useStoriesContext();

  const [inPause, setInPause] = React.useState(false);
  const initialStories = getInitialStories(userId);

  const storiesInitialValue = getCurrentStoriesInitialConfig(
    initialStories,
    userId,
  );

  const [storiesState, storiesDispatch] = React.useReducer(
    storiesModalReducer,
    storiesInitialValue,
  );
  const storiesStateInitialValue = { ...storiesState, storiesDispatch };

  const { timing, currentStories, currentStory } = storiesState;
  const { currentStoryIndex } = getCurrentStory(currentStories, currentStory);

  const storyTransitionConfig: StoryTransitionConfig = {
    userId,
    storiesDispatch,
    dispatch,
    currentStories,
    currentStoryIndex,
    timing,
    inPause,
    setInPause,
  };
  const { avatar: userAvatar } = USERS.find(
    (user) => user.name === userName,
  ) as Users;

  React.useEffect(() => {
    if (inPause) {
      storiesDispatch({ type: STORIES_MODAL_REDUCER_ACTIONS.TOGGLE_LOADING });
      setInPause(false);
    }
  }, [currentStory]);
  return {
    storiesStateInitialValue,
    storyTransitionConfig,
    inPause,
    dispatch,
    userAvatar,
    userName,
    userId,
  };
};

function getCurrentStory(stories: string[], current: string) {
  const currentStoryIndex = stories.findIndex((story) => story === current);
  return {
    currentStoryIndex,
    currentStory: stories[currentStoryIndex],
  };
}
