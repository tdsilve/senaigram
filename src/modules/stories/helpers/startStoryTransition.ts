import {
  STORIES_MODAL_REDUCER_ACTIONS,
  STORIES_REDUCER_ACTIONS,
} from "../types/enums";
import { Payload, PayloadConfig, StoryTransitionConfig } from "../types/type";
import { STORIES } from "../aux/stories";
import { USERS } from "../aux/users";
import { toggleModal } from "../services/toggleModal";
export const startStoryTransition = (config: StoryTransitionConfig) => {
  const {
    currentStoryIndex,
    currentStories,
    storiesDispatch,
    dispatch,
    userId,
  } = config;

  const storiesRemaining = currentStoryIndex < currentStories.length - 1;

  if (storiesRemaining) {
    const newIndex = currentStoryIndex + 1;

    storiesDispatch?.({
      type: STORIES_MODAL_REDUCER_ACTIONS.SET_SINGLE_STORY,
      content: currentStories[newIndex],
    });
  }

  if (!storiesRemaining) {
    const moreUsersStories = userId < STORIES.length - 1;

    if (moreUsersStories) {
      const newStoriesBatch = STORIES[userId + 1].stories;
      const userName = USERS.find((user) => user.id === userId + 1)?.name;

      storiesDispatch?.({
        type: STORIES_MODAL_REDUCER_ACTIONS.SET_NEW_STORIES_BATCH,
        config: { currentStories: newStoriesBatch } as StoryTransitionConfig,
      });

      dispatch?.({
        type: STORIES_REDUCER_ACTIONS.SET_MODAL,
        config: {
          userId: userId + 1,
          userName,
        },
      });
    }

    if (!moreUsersStories)
      toggleModal(dispatch as React.Dispatch<Payload>, config);
  }
};
